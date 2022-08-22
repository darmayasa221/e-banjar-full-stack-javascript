import React from 'react';
import { useParams } from 'react-router-dom';
import DefaultItem from '../../assets/images/default_item.png';
import Wraper from '../UI/Wraper';

export default function ActivityDetail() {
  const { title } = useParams();
  return (
    <Wraper
      className="pt-3"
    >
      <img src={DefaultItem} alt="item" className="mx-auto max-h-80" />
      <div className="px-7 mt-3 md:border-t-2 border-slate-100  md:mx-20 ">
        <h1 className="font-bold text-lg">
          {title}
          <i className="font-semibold text-xs"> - 10/11/2022</i>
        </h1>
        <span className="text-justify text-md">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus explicabo eveniet dicta, facilis architecto quae assumenda distinctio aperiam quasi. Quibusdam magnam ea officiis libero sequi accusantium, vitae officia in nobis!</p>
        </span>
      </div>
    </Wraper>
  );
}
