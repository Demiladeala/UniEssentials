"use client"

import Link from "next/link"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { Edit, ShoppingBag } from "lucide-react"
import { useShoppingCart } from "use-shopping-cart"

import { Button } from "@/components/ui/button"
import { UserButton } from "@clerk/nextjs"
import { Input } from "@/components/ui/input"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"
import { useUser } from "@clerk/nextjs"

export function SiteHeader() {
  const { user, isLoaded } = useUser()
  const pathname = usePathname()
  const router = useRouter()
  const searchParams = useSearchParams()
  const { cartCount } = useShoppingCart()
  const defaultSearchQuery = searchParams.get('search') ?? ""

  if (pathname.startsWith("/studio")) return null

  function onSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const searchQuery = formData.get("search")
    router.replace(`/?search=${searchQuery}`)
  }

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-2 sm:space-x-0">
        <MainNav />
        <form onSubmit={onSubmit} className="hidden items-center lg:inline-flex">
          <Input
            id="search"
            name="search"
            type="search"
            autoComplete="off"
            placeholder="Search products..."
            className="h-9 lg:w-[300px]"
            defaultValue={defaultSearchQuery}
          />
        </form>
        <div className="flex items-center">
          <Link href="/cart">
            <Button size="sm" variant="ghost">
              <ShoppingBag className="h-5 w-5" />
              <span className="ml-[2px] text-sm font-bold">{cartCount}</span>
              <span className="sr-only">Cart</span>
            </Button>
          </Link>
          <ThemeToggle />
          {/* {process.env.NODE_ENV === 'development' && (
            <Link href='/studio'>
              <Button size="sm" variant='ghost'>
                <Edit className="h-5 w-5"/>
              </Button>
            </Link>
          )} */}
            {
              (isLoaded && user) ? (
                <UserButton afterSignOutUrl="/"/>
              ) :
              (
                <>
                <Link href='/login'>
                  <Button className="ml-2 max-[280px]:hidden" size="sm" variant='default'>
                    <p>LOGIN</p>
                  </Button>
              </Link>
                </>
              )
            }
        </div>
      </div>
    </header>
  )
}
