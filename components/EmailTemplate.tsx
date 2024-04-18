import * as React from 'react';
interface EmailTemplateProps {
  firstName: string;
 
}
export const EmailTemplate= ({firstName}:EmailTemplateProps) =>{
   
    return (
        <div>
            <h1>h</h1>
            <h1>Welcome, {firstName}!</h1>
            <p>Thank you for contacting us!</p>
            <p>New message submitted</p>
            <p>j</p>
        </div>
      );
} 
