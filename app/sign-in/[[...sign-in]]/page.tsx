import { SignIn } from "@clerk/nextjs";
 
export default function Page() {
  return (
    <div classname="my-20 w-full flex items-center justify-center">
      <SignIn />
    </div>
    )
}
