'use client';
import React from "react";
import Nav from "../components/Nav";
function AddBooks() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [data, setData] = React.useState({
    Title: "",
    Author: "",
    Edition: "",
    Price: "",
    Status: "",
    Overview: "",
    Type: "",
    Genere: ""
  });

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
        const formData = new URLSearchParams();
        formData.append("Title", data.Title);
        formData.append("Author", data.Author);
        formData.append("Edition", data.Edition);
        formData.append("Price", data.Price);
        formData.append("Status", data.Status);
        formData.append("Overview", data.Overview);
        formData.append("Type", data.Type);
        formData.append("Genere", data.Genere);
    
          const response = await fetch('/api/addbook', {
            method: "post",
            body: formData.toString(),
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          });
    
          if (!response.ok) {
            throw new Error("Book upload failed");
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
      <Nav />
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
                  <label className="">Edition</label>
                  <input
                  value={data.Edition}
                  onChange={(e) => setData({ ...data, Edition: e.target.value })}
                  required
                  type="text" name="Edition" placeholder="Edition" className="input input-bordered input-primary w-full max-w-xs bg-white" />
              </div>
              <div className="grid justify-center">
                  <label className="">Price</label>
                  <input
                  value={data.Price}
                  onChange={(e) => setData({ ...data, Price: e.target.value })}
                  required
                  type="number" name="Price" placeholder="Price In Birr" min={0} className="input input-bordered input-primary w-full max-w-xs bg-white" />
              </div>
              <div className="grid justify-center">
                  <label className="">Status</label>
                  <input
                  value={data.Status}
                  onChange={(e) => setData({ ...data, Status: e.target.value })}
                  required
                  type="text" name="Status" placeholder="status" className="input input-bordered input-primary w-full max-w-xs bg-white" />
              </div>
              <div className="grid justify-center">
                  <label className="">Overview</label>
                  <textarea
                  value={data.Overview}
                  onChange={(e) => setData({ ...data, Overview: e.target.value })}
                  required
                  placeholder="Overview..." name="Overview" className="input input-bordered input-primary w-full max-w-xs bg-white">
                  </textarea>
              </div>
              <div className="grid justify-center">
                  <label className="">Type</label>
                  <select
                  value={data.Type}
                  name="Type"
                  onChange={(e) => setData({ ...data, Type: e.target.value })}
                  required
                  className="select select-primary w-full max-w-xs bg-white">
                      <option value={""} disabled selected>Service Type</option>
                      <option value={"Buy"}>Buy</option>
                      <option value={"Rent"}>Rent</option>
                  </select>
              </div>
              <div className="grid justify-center">
                  <label className="">Genere</label>
                  <select
                  value={data.Genere}
                  name="Genere"
                  onChange={(e) => setData({ ...data, Genere: e.target.value })}
                  required
                  className="select select-primary w-full max-w-xs bg-white">
                      <option value={""} disabled selected>Genere</option>
                      <option value={"Fiction"}>Fiction</option>
                      <option value={"Religious"}>Religious</option>
                      <option value={"Business"}>Business</option>
                      <option value={"Selfhelp"}>Self help</option>
                      <option value={"Philosophy"}>Philosophy</option>
                      <option value={"other"}>other</option>
                  </select>
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

  export default AddBooks;
