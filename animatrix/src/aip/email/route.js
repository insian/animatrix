import { Resend } from "resend";

const resend = new Resend('re_4dw2NwW5_ADJccucDV32WnNea2Rovk1YA');

export async function GET() {
    await resend.sendEmail({
        from: "onboarding@resend.dev",
        to: "patrasoham1512@gmail.com",
        subject: "Hello World",
        text: "Hi",
    })

    
}