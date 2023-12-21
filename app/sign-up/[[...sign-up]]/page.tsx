import { SignUp } from "@clerk/nextjs";
 
export default function Page() {
  return  (
    <div className="my-20 w-full flex items-center justify-center">
      <SignUp />
    </div>
    )
}
