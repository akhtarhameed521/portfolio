import Image from 'next/image';
import React from 'react';

export default function ProfileImage() {
  return (
    <div className=" lg:w-[400px] h-full relative hidden lg:block">
      <Image src={'/img/profile.jpg'} width={400}  height={1000} alt='profile image' />
    </div>
  );
}
