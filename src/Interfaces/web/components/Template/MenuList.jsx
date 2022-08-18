import React from 'react';
import Link from '../UI/Link';

export default function MenuList() {
  const access = 'admin';
  return (
    <>
      <ul>
        <li className="py-2 hover:bg-black hover:text-white">
          <Link
            to="/"
            text="Profile"
          />
        </li>
        {
          access === 'admin' && (
            <>
              <li className="py-2 hover:bg-black hover:text-white">
                <Link
                  to="/"
                  text="Data Masyarakat"
                />
              </li>
              <li className="py-2 hover:bg-black hover:text-white">
                <Link
                  to="/"
                  text="Data Kegiatan"
                />
              </li>
            </>
          )
        }
        <li className="py-2 hover:bg-black hover:text-white">
          <Link
            to="/"
            text="Kegiatan"
          />
        </li>
        <li className="py-2 hover:bg-black hover:text-white">
          <Link
            to="/"
            text="Masyarakat"
          />
        </li>
      </ul>
    </>
  );
}
