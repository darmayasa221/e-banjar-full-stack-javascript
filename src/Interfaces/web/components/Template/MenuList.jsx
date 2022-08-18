import React from 'react';
import Link from '../UI/Link';

export default function MenuList() {
  const access = 'user';
  return (
    <>
      <ul>
        <li className=" py-2 hover:bg-black hover:text-white">
          <Link
            className="block w-full"
            to="/dashboard/profile"
            text="Profile"
          />
        </li>
        {
          access === 'admin' && (
            <>
              <li className="py-2 hover:bg-black hover:text-white">
                <Link
                  className="block w-full"
                  to="/"
                  text="Data Masyarakat"
                />
              </li>
              <li className="py-2 hover:bg-black hover:text-white">
                <Link
                  className="block w-full"
                  to="/"
                  text="Data Kegiatan"
                />
              </li>
            </>
          )
        }
        <li className="py-2 hover:bg-black hover:text-white">
          <Link
            className="block w-full"
            to="/"
            text="Kegiatan"
          />
        </li>
        <li className="py-2 hover:bg-black hover:text-white">
          <Link
            className="block w-full"
            to="/"
            text="Masyarakat"
          />
        </li>
      </ul>
    </>
  );
}
