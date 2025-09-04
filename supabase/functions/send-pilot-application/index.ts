import { createClient } from 'npm:@supabase/supabase-js@2';

interface ApplicationData {
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  projectType: string;
  description: string;
  hearAbout: string;
}

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

Deno.serve(async (req: Request) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const applicationData: ApplicationData = await req.json();
    
    // Validate required fields
    const requiredFields = ['companyName', 'contactName', 'email', 'phone', 'projectType', 'description'];
    const missingFields = requiredFields.filter(field => !applicationData[field]?.trim());
    
    if (missingFields.length > 0) {
      return new Response(
        JSON.stringify({ error: `Missing required fields: ${missingFields.join(', ')}` }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      );
    }

    // Format email content
    const emailSubject = `New Pilot Program Application - ${applicationData.companyName}`;
    
    const emailBody = `
New Pilot Program Application Received

Company Details:
• Company Name: ${applicationData.companyName}
• Contact Person: ${applicationData.contactName}
• Email: ${applicationData.email}
• Phone: ${applicationData.phone}

Project Information:
• Project Type: ${applicationData.projectType}
• Description: ${applicationData.description}

Additional Info:
• How they heard about us: ${applicationData.hearAbout || 'Not specified'}

Submitted: ${new Date().toLocaleString('en-AU', { timeZone: 'Australia/Sydney' })}

---
This application was submitted through the Ai²Groundworks website pilot program form.
    `.trim();

    // Send email using Resend API
    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${Deno.env.get('RESEND_API_KEY')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Ai²Groundworks <noreply@ai2groundworks.com.au>',
        to: ['dale@ai2groundworks.com.au'],
        subject: emailSubject,
        text: emailBody,
      }),
    });

    if (!resendResponse.ok) {
      const errorText = await resendResponse.text();
      console.error('Resend API error:', errorText);
      throw new Error('Failed to send notification email');
    }

    // Send confirmation email to applicant
    const confirmationSubject = 'Thank you for your pilot program application';
    const confirmationBody = `
Hi ${applicationData.contactName},

Thank you for applying to the Ai²Groundworks pilot program!

We've received your application for ${applicationData.companyName} and our team will review it shortly. We typically respond within 24-48 hours with next steps.

What happens next:
1. Our team reviews your application
2. We'll schedule a brief discovery call
3. If it's a good fit, we'll set up your 3-month pilot access

We're excited about the possibility of working together to transform your construction projects.

Best regards,
The Ai²Groundworks Team

---
This is an automated confirmation. Please don't reply to this email.
For questions, contact us at info@ai2groundworks.com.au
    `.trim();

    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${Deno.env.get('RESEND_API_KEY')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Ai²Groundworks <noreply@ai2groundworks.com.au>',
        to: [applicationData.email],
        subject: confirmationSubject,
        text: confirmationBody,
      }),
    });

    return new Response(
      JSON.stringify({ success: true, message: 'Application submitted successfully' }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    );

  } catch (error) {
    console.error('Error processing application:', error);
    
    return new Response(
      JSON.stringify({ 
        error: 'Failed to process application', 
        details: error instanceof Error ? error.message : 'Unknown error'
      }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    );
  }
});