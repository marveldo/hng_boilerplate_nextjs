"use server";


export async function SubmitForm(formstate : { message : string}, formData : FormData)  {
  
    const email = formData.get('email') as string
    const organisation = formData.get('organisation') as string
    
   if (email === '' || email.includes("@") === false){
    return {
        message : 'Invalid email'
    }
   }
   else{
    return {message : 'success'}
   }
 
}

