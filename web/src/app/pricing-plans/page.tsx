import { Metadata } from "next";
import PricingClient from "./pricing-client";

export const metadata: Metadata = {
  title: "Pricing Plans",
  description: "Choose your growth tier with SherCorp's AI and Creative Design packages.",
};

export default function PricingPage() {
  return <PricingClient />;
}
