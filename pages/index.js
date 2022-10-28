import Brand from "../components/Index/Brand";
import CallToAction from "../components/Index/CallToAction";
import Design from "../components/Index/Design";
import Editing from "../components/Index/Editing";
import Hero from "../components/Index/Hero";
import Integrations from "../components/Index/Integrations";
import Pricing from "../components/Index/Pricing";
import Master from "../components/Layout/Master";

export default function Index() {
  return (
      <Master>
        <Hero/>
        <Brand/>
        <Design/>
        <Integrations/>
        <Editing/>
        <Pricing/>
        <CallToAction/>
      </Master>
  )
}
