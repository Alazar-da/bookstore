'use client';
import React from "react";
function AddForm() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [data, setData] = React.useState({
    Title: "",
    Author: "",
    UserName: "",
    PhoneNumber: "",
  });

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
        const formData = new URLSearchParams();
        formData.append("Title", data.Title);
        formData.append("Author", data.Author);
        formData.append("UserName", data.UserName);
        formData.append("PhoneNumber", data.PhoneNumber);

          const response = await fetch('/api/ordernew', {
            method: "post",
            body: formData.toString(),
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          });
    
          if (!response.ok) {
            throw new Error("Order upload failed");
          }
    
          const result = await response.json();
    
          alert(result.message);
        } catch (error) {
          console.error({"message":error});
          alert("An error occurred during Book upload.");
        }
      }
    return (
      <>
    <section className="bg-white h-screen text-black pt-5 container mx-auto">
      <div className="lg:w-4/5 py-5 pt-5 grid grid-cols-7">
          <form onSubmit={handleSubmit} className=" flex flex-col gap-3 border p-4 border-slate-600 rounded-lg col-span-4 col-start-3 bg-slate-500">
              <div className="grid justify-center">
                  <label className="">Title</label>
                  <input
                  value={data.Title}
                  onChange={(e) => setData({ ...data, Title: e.target.value })}
                  required
                   type="text" name="Title" placeholder="Title" className="input input-bordered input-primary w-full max-w-xs bg-white" />
              </div>
              <div className="grid justify-center">
                  <label className="">Author</label>
                  <input
                  value={data.Author}
                  onChange={(e) => setData({ ...data, Author: e.target.value })}
                  required
                  type="text" name="Author" placeholder="Author" className="input input-bordered input-primary w-full max-w-xs bg-white" />
              </div>
              <div className="grid justify-center">
                  <label className="">UserName</label>
                  <input
                  value={data.UserName}
                  onChange={(e) => setData({ ...data, UserName: e.target.value })}
                  required
                  type="text" name="UserName" placeholder="UserName" className="input input-bordered input-primary w-full max-w-xs bg-white" />
              </div>
              <div className="grid justify-center">
                  <label className="">PhoneNumber</label>
                  <input
                  value={data.PhoneNumber}
                  onChange={(e) => setData({ ...data, PhoneNumber: e.target.value })}
                  required
                  type="number" name="PhoneNumber" placeholder="PhoneNumber" min={0} className="input input-bordered input-primary w-full max-w-xs bg-white" />
              </div>
              <div className="grid justify-center">
                <button className="btn btn-primary">Submit</button>
              </div>


          </form>
      </div>
    </section>
    </>
    );
  }

  export default AddForm;
