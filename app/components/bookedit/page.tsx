'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';


interface BookData {
  _id: string;
  Title: string;
  Author: string;
  Edition: string;
  Price: string;
  Status: string;
  Overview: string;
  Type: string;
  Genere: string;
}

type BookEditProps = {
  objectArray: string[]; // Replace `YourItemType` with the type of your objects
};

const BookEdit: React.FC<BookEditProps> = ({ objectArray }) => {
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
  console.log({objectArray})
 /*  useEffect(() => {
    setData({
      ...data,
      Title: objectArray[1],
      Author: objectArray[2],
      Edition: objectArray[3],
      Price: objectArray[4],
      Status: objectArray[5],
      Overview: objectArray[6],
      Type: objectArray[7],
      Genere: objectArray[8]
    });
  }, [data, objectArray]); */
 /*  setData(prevData => {
    return [
      ...prevData,
    Title: objectArray[1],
    Author: objectArray[2],
    Edition: objectArray[3],
    Price: objectArray[4],
    Status: objectArray[5],
    Overview: objectArray[6],
    Type: objectArray[7],
    Genere: objectArray[8]
    ];
  });
    console.log({objectArray}) */
   /*  useEffect(() => {
      fetchData();
    }, []);

    const fetchData = async () => {
      const response = await fetch('/api/addbook');
      const datas = await response.json();
      setData(datas);
    }; */

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
        const formData = new URLSearchParams();
     /*    formData.append("Title", data.Title);
        formData.append("Author", data.Author);
        formData.append("Edition", data.Edition);
        formData.append("Price", data.Price);
        formData.append("Status", data.Status);
        formData.append("Overview", data.Overview);
        formData.append("Type", data.Type);
        formData.append("Genere", data.Genere); */
    
          const response = await fetch('/api/addbook', {
            method: "update",
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

    <section className="bg-white h-screen text-black pt-5 container mx-auto">
       <div><button><Link href={'/'}>Back</Link></button></div>
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
                  type="number" step=".01" name="Price" placeholder="Price In Birr" min={0} className="input input-bordered input-primary w-full max-w-xs bg-white" />
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

  export default BookEdit;
