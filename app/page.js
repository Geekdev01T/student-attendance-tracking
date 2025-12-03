"use client"
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Hero from "./_components/Hero";
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs";
import { useEffect } from "react";
import { redirect } from "next/navigation";

export default function Home() {
  useEffect(() => {
    redirect('/api/auth/login?post_login_redirect_url=/dashboard')
  })
  // return (
  //   <div>
  //     <h2>Subscrube to me ...</h2>
  //     <Button>subscribe</Button>
  //     <LoginLink postLoginRedirectURL="/dashboard">Sign in</LoginLink>
  //     <RegisterLink postLoginRedirectURL="/dashboard">Sign up</RegisterLink>
  //   </div>
  // );
}
