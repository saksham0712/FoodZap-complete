import React from 'react';
import Layout from "../../components/layout/Layout";
import "../../styles/HomeStyle.css"
import Section1 from './Section1';
import { Section2 } from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';
import Section6 from './Section6';
import Section7 from './Section7';

function Home() {
  return (
    <>
      <Layout>
       {/* home section hero banner */}
       <Section1 />

       {/* Home section 2 */}
       <Section2 />

       {/* Home menu section 3 */}
       <Section3 />

        {/* Home section 4 permotion */}
        <Section4 />

        {/* Home SEction shop  */}
        <Section5 />

        {/* home section blog 6.0 */}
        <Section6 />

        {/* home section contact */}
        <Section7 />
      </Layout>
    </>
  )
}

export default Home
