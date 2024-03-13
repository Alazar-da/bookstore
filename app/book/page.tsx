'use client';
import Nav from '../components/Nav';
import React, { useEffect, useState } from 'react';

interface BookData {
  id: string;
  Title: string;
  Author: string;
  Edition: string;
  Price: string;
  Status: string;
  Overview: string;
  Type: string;
  Genre: string;
}

function Book() {
  const [data, setData] = useState<BookData[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch('/api/addbook');
    const datas = await response.json();
    setData(datas);
  };

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
                <th className="border border-slate-600 px-4 py-2">Genre</th>
                <th className="border border-slate-600 px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id}>
                  <td className="border border-slate-600 px-4 py-2">{item.Title}</td>
                  <td className="border border-slate-600 px-4 py-2">{item.Author}</td>
                  <td className="border border-slate-600 px-4 py-2">{item.Edition}</td>
                  <td className="border border-slate-600 px-4 py-2">{item.Price}</td>
                  <td className="border border-slate-600 px-4 py-2">{item.Status}</td>
                  <td className="border border-slate-600 px-4 py-2">{item.Overview}</td>
                  <td className="border border-slate-600 px-4 py-2">{item.Type}</td>
                  <td className="border border-slate-600 px-4 py-2">{item.Genre}</td>
                  <td className="border border-slate-600 px-4 py-2">
                    <a>Edit</a> <a>Delete</a>
                  </td>
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