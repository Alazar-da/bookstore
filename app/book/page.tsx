'use client';
import Nav from '../components/Nav';
import React, { useEffect, useState } from 'react';

function Book() {
// eslint-disable-next-line react-hooks/rules-of-hooks
const [data, setData] = React.useState([]);

  useEffect(() => {
    fetchData();
  });

  const fetchData = async () => {
    const response = await fetch('/api/addbook');
    const datas = await response.json();
    setData(datas);
  };
  console.log(data);

  return (
    <>
      <Nav />
      <section className="bg-white h-screen text-black">
        <div className="container mx-auto pt-5 overflow-x-auto">
          <table className="bg-slate-300 table table-xs table-pin-rows table-pin-cols">
            <thead>
              <tr className="bg-slate-400">
                <th className="border border-slate-600 px-4 py-2">Title</th>
                <th className="border border-slate-600 px-4 py-2">Author</th>
                <th className="border border-slate-600 px-4 py-2">Edition</th>
                <th className="border border-slate-600 px-4 py-2">Price</th>
                <th className="border border-slate-600 px-4 py-2">Status</th>
                <th className="border border-slate-600 px-4 py-2">Overview</th>
                <th className="border border-slate-600 px-4 py-2">Type</th>
                <th className="border border-slate-600 px-4 py-2">Genere</th>
                <th className="border border-slate-600 px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((list) => (
                <tr key={list._id}>
                  <td className="border border-slate-600 px-4 py-2">{list.Title}</td>
                  <td className="border border-slate-600 px-4 py-2">{list.Author}</td>
                  <td className="border border-slate-600 px-4 py-2">{list.Edition}</td>
                  <td className="border border-slate-600 px-4 py-2">{list.Price}</td>
                  <td className="border border-slate-600 px-4 py-2">{list.Status}</td>
                  <td className="border border-slate-600 px-4 py-2">{list.Overview}</td>
                  <td className="border border-slate-600 px-4 py-2">{list.Type}</td>
                  <td className="border border-slate-600 px-4 py-2">{list.Genere}</td>
                  <td className="border border-slate-600 px-4 py-2"><a>Edit</a> <a>Delete</a></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}

export default Book;