import Brand from "../components/Index/Brand";
import Design from "../components/Index/Design";
import Hero from "../components/Index/Hero";
import Integrations from "../components/Index/Integrations";
import Master from "../components/Layout/Master";

export default function Index() {
  return (
      <Master>
        <Hero/>
        <Brand/>
        <Design/>
        <Integrations/>
      </Master>
  )
}
