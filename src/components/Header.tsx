"use client";

import Link from "next/link";
import { MenuIcon } from "lucide-react";
import { Logo } from "@/components/Logo";
import { buttonVariants } from "@/components/ui/button";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navLinks } from "@/data/site";
import { cn } from "@/lib/utils";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-black/10 bg-lilac">
      <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between gap-4 px-5 md:px-8">
        <Link
          href="/"
          className="shrink-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground"
        >
          <Logo variant="light" className="h-10 w-auto sm:h-11" />
        </Link>

        <NavigationMenu
          aria-label="Primary"
          className="hidden min-[881px]:flex"
        >
          <NavigationMenuList className="gap-1">
            {navLinks.map((link) => (
              <NavigationMenuItem key={link.href}>
                <NavigationMenuLink
                  render={<Link href={link.href} />}
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "bg-transparent text-foreground hover:bg-background/50 focus:bg-background/50",
                  )}
                >
                  {link.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-3">
          <Link
            href="/start-with-clarity"
            className={cn(
              buttonVariants({ size: "lg" }),
              "hidden min-[881px]:inline-flex",
            )}
          >
            Start With Clarity →
          </Link>

          <Sheet>
            <SheetTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-foreground min-[881px]:hidden"
                />
              }
            >
              <MenuIcon />
              <span className="sr-only">Open menu</span>
            </SheetTrigger>
            <SheetContent side="right" className="bg-lilac text-foreground">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <nav aria-label="Mobile" className="flex flex-col gap-1 px-4">
                {navLinks.map((link) => (
                  <SheetClose
                    key={link.href}
                    render={<Link href={link.href} />}
                    nativeButton={false}
                    className="py-3 text-base font-medium text-foreground"
                  >
                    {link.label}
                  </SheetClose>
                ))}
              </nav>
              <div className="px-4 pb-6">
                <SheetClose
                  render={<Link href="/start-with-clarity" />}
                  nativeButton={false}
                  className={cn(buttonVariants({ size: "lg" }), "w-full")}
                >
                  Start With Clarity →
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
