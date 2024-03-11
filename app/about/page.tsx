'use client';
import Nav from '../components/Nav';
function About() {
    return (
      <>
      <Nav/>
      <section className="bg-white h-screen text-black pt-5 container mx-auto">
        <div className="lg:w-4/5 py-5 pt-5 grid grid-cols-7">
        <div className=" flex flex-col gap-6 border p-4 border-slate-600 rounded-lg col-span-4 col-start-3 bg-slate-300">
            <p>ብርሃን መፅሐፍት is a whole - centered distributor which organizes bookstores in harmony so that knowledge reaches to your doorstep. In this platform you can buy, rent and also sell any book centred at AASTU.

In our channel ( @AASTU_Book_Store ) you get variety of writing which encourages you to the expand your world of books...

Contact us:

CONTENT CREATION TEAM led by:
                     @y_a_b_u_Z
                      +251976647859

DISTRIBUTOR TEAM led by:
                      @silenterr
                      +251953933492</p>
</div>
        </div>
      </section>
      </>
    );
  }

  export default About;
