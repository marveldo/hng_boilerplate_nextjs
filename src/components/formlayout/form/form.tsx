"use client"
import React from "react";
import { X , ExternalLink } from "lucide-react";
import Image from "next/image";
import linkicon from "../images/icon.svg"
import { Button } from "~/components/common/Button";
import selecticon from "../images/selecticon.svg";
import { useFormState } from "react-dom";
import { SubmitForm } from "./actions";

interface FormValid {
    message : string
}



const InvitePeople = () => {
    const [showform , setshowform] = React.useState<boolean>(false)
    const formstate = {message : ''}
    const [formState , formaction] = useFormState(SubmitForm, formstate)
    const Clickbutton = () => {
       setshowform(true)
    } 

 
    
    

     
 

    return (<>

   <Button onClick={Clickbutton} className="w-[118px] h-10 px-4 py-2 bg-orange-500 rounded-md justify-center items-center gap-2.5 inline-flex">
      <div className="text-white text-sm font-medium font-['Inter'] leading-normal">Invite people</div>
   </Button>
        
        <div className={`w-[100vw] h-[100vh] ${showform ? '' : 'hidden'}  absolute top-0 flex justify-center bg-neutral-900 bg-opacity-25 pt-[149px]`}>



            <form action={formaction} className="max-w-[400px] w-full h-[294px] relative bg-white rounded-md shadow">
                <div className="max-w-[400px] w-full p-4 left-0 top-0 absolute border-b border-slate-300 justify-between items-center inline-flex">
                    <div className="justify-start items-center gap-3 flex">
                        <div className="w-6 h-6 relative">
                            <div className="w-6 h-6 left-0 top-0 absolute text-center text-slate-900 text-xs font-normal font-['Inter'] leading-7 bg-slate-200 rounded-full">KP</div>
                           
                        </div>
                        <div className="text-black text-sm font-[400] leading-tight">Invite to your Organization</div>
                    </div>
                    <div className="w-4 h-4 relative flex items-center">
                     <X className="w-full cursor-pointer" onClick={() => {setshowform((prev) => !prev)}}/>
                    </div>
                </div>
                <div className="h-[62px] px-[24px] pt-[72px] flex-col justify-start items-start gap-y-3 inline-flex w-full ">
                <div className="h-[62px]  w-full  flex-col justify-start items-start gap-y-1.5 flex">
                    <div className="self-stretch text-neutral-950 text-sm font-[500] leading-tight">Email</div>
                    <div className="self-stretch w-full">
                    <input name="email" placeholder="email@example.com, email2@example.com..." className={`self-stretch w-full  h-9 ${formState.message === 'Invalid email' ? 'border-red-600': ''} focus:outline-orange-500 pl-3 pr-14 py-2 bg-white rounded-md border text-neutral-600 text-xs font-normal  border-slate-300 justify-start items-center inline-flex`} type=""/>
                    {formState.message === 'Invalid email' ? <div className=""> 
                        <p className="text-red-600 text-[10px]">Invalid email</p>
                        </div> : null}
                    </div>
                     
                  
                </div>
                <div className="h-[62px] flex-col w-full justify-start items-start gap-1.5 inline-flex">

                    <div className="self-stretch text-neutral-950 text-sm font-[500] leading-tight">Add to Organization (Optional)</div>
                    <div className="relative self-stretch w-full h-9">
                    <select name="organisation" className=" h-10 px-3 w-full appearance-none  py-2 rounded-md border focus:outline-orange-500 text-neutral-600 text-xs font-normal  border-zinc-200 justify-between items-center inline-flex">
                        <option value=''>Select Organization</option>
                        <option value="Marveldo's org">Marveldo's org</option>
                    </select>
                    <Image src={selecticon} width={16} height={16} alt="slect icon" className="absolute right-3 top-3"/>
                    </div>
                   
                </div>
                </div>
              
                <div className="max-w-[352px] left-[24px] top-[236px] absolute justify-start items-center gap-[83px] inline-flex">
                    <div className="max-w-[153px] px-4 py-2 bg-white/opacity-0 rounded-md justify-center items-center gap-2 flex">
                        <div className="w-4 h-4 relative">
                        <Image src={linkicon} height={16} width={16} alt="link icon" />
                        </div>
                        <div className="text-slate-900 text-sm font-medium max-[350px]:text-[10px] leading-normal">Invite with link</div>
                    </div>
                    <Button className="max-w-[114px]  px-4 py-2 bg-orange-500 rounded-md justify-center items-center gap-2.5 flex">
                        <div className="text-white text-sm font-medium  leading-normal">Send invites</div>
                    </Button>
                </div>
            </form>
        </div>
        </>
    )
}

export default InvitePeople