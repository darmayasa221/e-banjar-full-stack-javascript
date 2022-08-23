import React from 'react';
import { useSelector } from 'react-redux';
import Link from '../UI/Link';

export default function MenuList() {
  const { idAccess } = useSelector(({ authorization }) => authorization);
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
          (idAccess === 2 || idAccess === 3) && (
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
            to="/dashboard/kegiatan"
            text="Kegiatan"
          />
        </li>
        <li className="py-2 hover:bg-black hover:text-white">
          <Link
            className="block w-full"
            to="/dashboard/masyarakat"
            text="Masyarakat"
          />
        </li>
      </ul>
    </>
  );
}
