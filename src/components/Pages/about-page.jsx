"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import TranslatableText from "../Global/TranslatableText";

const AboutPage = () => {
  return (
    <main className="my-20 w-full px-4 tablet:px-8 desktop:px-16">
      {/* Hero Section */}
      <section className="relative mx-auto mb-16 mt-16 flex h-[45vh] max-w-4xl flex-col items-center justify-center pt-20 text-center">
        <div className="absolute -z-10 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        <div className="my-10 rounded-2xl border border-neutral-100 bg-white p-2 shadow-inner">
          <Image
            src={"/brand/exelth-green.png"}
            width={100}
            height={100}
            alt="Exelth"
          />
        </div>
        <h1
          // lang="bn"
          className="text-3xl font-semibold tablet:text-4xl laptop:text-6xl"
        >
          {/* Transforming Healthcare <br /> for the Modern World */}
          <TranslatableText
            en=" Transforming Healthcare for the Modern World"
            bn="আধুনিক বিশ্বের জন্য স্বাস্থ্যসেবা রূপান্তর"
          />
        </h1>
        <p className="mt-4 text-base text-neutral-700 tablet:px-[15%] laptop:text-lg">
          {/* At Exelth, we&apos;re on a mission to simplify care delivery and bring
          clarity to healthcare—for everyone, everywhere. */}
          <TranslatableText
            en="At Exelth, we're on a mission to simplify care delivery and bring
          clarity to healthcare—for everyone, everywhere."
            bn="এক্সেল্টে, আমরা যত্ন প্রদান সহজ করার এবং স্বাস্থ্যসেবায় স্বচ্ছতা আনার লক্ষ্যে কাজ করছি—সবার জন্য, সর্বত্র।"
          />
        </p>
      </section>
      <section className="redd mx-auto max-w-5xl pt-16 text-center">
        <h1 className="text-2xl font-bold laptop:text-4xl">
          <TranslatableText
            en="A story of health, connection, and the future of care"
            bn="স্বাস্থ্য, সংযোগ এবং যত্নের ভবিষ্যতের গল্প"
          />
        </h1>
      </section>
      {/* Story Section */}
      <section className="mx-auto mb-16 max-w-5xl space-y-16">
        {/* Clinics Side */}
        <div className="grid gap-6 tablet:grid-cols-2 tablet:items-center">
          <div className="redd">
            <Image
              src="/exelth-about-juggling.png"
              width={500}
              height={400}
              alt="Clinic team juggling tasks"
              className="sfu mx-auto"
            />
          </div>
          <div className="text-center text-xl tablet:text-left">
            {/* <h2 className="text-2xl font-semibold text-gray-800">
              Built for Healthcare Teams
            </h2> */}
            <p className="mt-4 text-gray-600">
              {/* If you&apos;re a doctor, receptionist, or clinic owner,
              you&apos;re probably spending hours every day juggling patients,
              appointments, and records. */}
              <TranslatableText
                en="If you're a doctor, receptionist, or clinic owner,
              you're probably spending hours every day juggling patients,
              appointments, and records."
                bn="আপনি যদি একজন ডাক্তার, রিসেপশনিস্ট, অথবা ক্লিনিকের মালিক হন,
তাহলে আপনি সম্ভবত প্রতিদিন ঘন্টার পর ঘন্টা রোগীদের,
অ্যাপয়েন্টমেন্ট এবং রেকর্ড নিয়ে ঝামেলা করছেন।"
              />
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-xl font-semibold text-gray-800 laptop:text-3xl">
            {/* We created <span className="text-green-600">Exelth</span> to change
            that — for everyone. */}
            <TranslatableText
              en="We created Exelth to change that — for everyone."
              bn="আমরা এটি পরিবর্তন করার জন্য এক্সেলথ তৈরি করেছি - সবার জন্য।"
            />
          </h1>
        </div>
        {/* Patients Side */}
        <div className="grid gap-6 tablet:grid-cols-2 tablet:flex-row-reverse tablet:items-center">
          <div className="text-center tablet:text-left">
            {/* <h2 className="text-2xl font-semibold text-gray-800">
              Designed for Patients
            </h2> */}
            <p className="mt-4 text-xl text-gray-600">
              {/* And if you&apos;re a patient, you know how frustrating it can be
              to wait in long queues, chase prescriptions, or manage your health
              history across multiple hospitals. */}
              <TranslatableText
                en="And if you're a patient, you know how frustrating it can be
              to wait in long queues, chase prescriptions, or manage your health
              history across multiple hospitals."
                bn="আর যদি আপনি একজন রোগী হন, তাহলে আপনি জানেন যে দীর্ঘ লাইনে অপেক্ষা করা, প্রেসক্রিপশনের পিছনে ছুটতে, অথবা একাধিক হাসপাতালে আপনার স্বাস্থ্যের ইতিহাস পরিচালনা করা কতটা হতাশাজনক হতে পারে।"
              />
            </p>
          </div>
          <div>
            <Image
              src="/exelth-about-b2c.png"
              width={500}
              height={400}
              alt="Patient waiting illustration"
              className="mx-auto"
            />
          </div>
        </div>
        {/* Healthcare was built for another era */}
        <div className="mx-auto max-w-5xl text-center">
          <h1 className="text-xl font-semibold text-gray-800 laptop:text-3xl">
            {/* Healthcare was built for another era */}
            <TranslatableText
              en=" Healthcare was built for another era"
              bn="স্বাস্থ্যসেবা অন্য যুগের জন্য তৈরি হয়েছিল"
            />
          </h1>
          <div className="grid gap-6 tablet:grid-cols-2 tablet:items-center">
            <div className="redd">
              <Image
                src="/exelth-manual-1.png"
                width={500}
                height={400}
                alt="Clinic team juggling tasks"
                className="sfu mx-auto"
              />
            </div>
            <div className="text-center text-xl tablet:text-left">
              {/* <h2 className="text-2xl font-semibold text-gray-800">
              Built for Healthcare Teams
            </h2> */}
              <p className="mt-4 text-gray-600">
                {/* For decades, clinics have relied on manual registers, physical
                files, and endless phone calls to run their operations. */}
                <TranslatableText
                  en=" For decades, clinics have relied on manual registers, physical
                files, and endless phone calls to run their operations."
                  bn="কয়েক দশক ধরে, ক্লিনিকগুলি তাদের কার্যক্রম পরিচালনার জন্য ম্যানুয়াল রেজিস্টার, ভৌত ফাইল এবং অফুরন্ত ফোন কলের উপর নির্ভর করে আসছে।"
                />
              </p>
            </div>
          </div>
          <div className="grid gap-6 tablet:grid-cols-2 tablet:items-center">
            <div className="text-center text-xl tablet:text-left">
              {/* <h2 className="text-2xl font-semibold text-gray-800">
              Built for Healthcare Teams
            </h2> */}
              <p className="mt-4 text-gray-600">
                {/* Patients, meanwhile, have carried paper prescriptions, lab
                results, and files from one hospital to another — often losing
                precious time and information along the way. */}
                <TranslatableText
                  en="Patients, meanwhile, have carried paper prescriptions, lab
                results, and files from one hospital to another — often losing
                precious time and information along the way."
                  bn="ইতিমধ্যে, রোগীরা কাগজের প্রেসক্রিপশন, ল্যাবের ফলাফল এবং ফাইল এক হাসপাতাল থেকে অন্য হাসপাতালে বহন করে নিয়ে যাচ্ছেন - প্রায়শই পথে মূল্যবান সময় এবং তথ্য নষ্ট হচ্ছে।"
                />
              </p>
            </div>
            <div className="redd">
              <Image
                src="/patient-checks-file.png"
                width={500}
                height={400}
                alt="Clinic team juggling tasks"
                className="sfu mx-auto"
              />
            </div>
          </div>
          <p className="text-based text-gray-800 laptop:text-xl">
            <TranslatableText
              en="This worked once, but healthcare has outgrown those tools."
              bn="এটি একসময় কাজ করেছিল, কিন্তু স্বাস্থ্যসেবা সেই সরঞ্জামগুলিকে ছাড়িয়ে গেছে।"
            />
            {/* This worked once, but healthcare has outgrown those tools. */}
          </p>
        </div>
        {/* Then came software — but it was scattered */}
        <div className="mx-auto max-w-5xl text-center">
          <h1 className="text-xl font-semibold text-gray-800 laptop:text-3xl">
            {/* Then came software — but it was scattered */}
            <TranslatableText
              en="Then came software — but it was scattered"
              bn="তারপর এলো সফটওয়্যার — কিন্তু তা ছড়িয়ে ছিটিয়ে ছিল"
            />
          </h1>
          <div className="grid gap-6 tablet:grid-cols-2 tablet:items-center">
            <div className="redd">
              <Image
                src="/old-software.png"
                width={500}
                height={400}
                alt="Clinic team juggling tasks"
                className="sfu mx-auto"
              />
            </div>
            <div className="text-center text-lg tablet:text-left">
              {/* <h2 className="text-2xl font-semibold text-gray-800">
              Built for Healthcare Teams
            </h2> */}
              <p className="mt-4 text-gray-600">
                {/* First came spreadsheets and hospital management systems. They
                helped, but they were designed for administrators, not for care
                teams or patients. Each tool solved just one problem — billing,
                records, or scheduling — but never brought the entire care
                experience together. */}
                <TranslatableText
                  en="First came spreadsheets and hospital management systems.
                They helped, but they were designed for administrators, not for
                care teams or patients. Each tool solved just one problem —
                billing, records, or scheduling — but never brought the entire
                care experience together."
                  bn="প্রথমে স্প্রেডশিট এবং হাসপাতাল ব্যবস্থাপনা ব্যবস্থা এসেছিল।
তারা সাহায্য করেছিল, কিন্তু তারা প্রশাসকদের জন্য ডিজাইন করা হয়েছিল,
যত্ন দল বা রোগীদের জন্য নয়। প্রতিটি সরঞ্জাম কেবল একটি সমস্যা সমাধান করে -
বিলিং, রেকর্ড, অথবা সময়সূচী - কিন্তু কখনই সম্পূর্ণ
যত্নের অভিজ্ঞতা একত্রিত করেনি।"
                />
              </p>
            </div>
          </div>
        </div>
        {/* Exelth is here to change that */}
        <div className="mx-auto max-w-5xl text-center">
          <h1 className="text-xl font-semibold text-gray-800 laptop:text-3xl">
            {/* Exelth is here to change that */}
            <TranslatableText
              en="Exelth is here to change that"
              bn="এক্সেল্ট এখানে এটি পরিবর্তন করতে এসেছে"
            />
          </h1>
          <p className="mt-2 text-base text-gray-600 laptop:text-lg">
            {/* We believe healthcare should be connected, patient-first, and
            collaborative. So we built a platform where: */}
            <TranslatableText
              en=" We believe healthcare should be connected, patient-first, and
            collaborative. So we built a platform where:"
              bn="আমরা বিশ্বাস করি স্বাস্থ্যসেবা সংযুক্ত, রোগী-প্রথমে এবং
সহযোগী হওয়া উচিত। তাই আমরা একটি প্ল্যাটফর্ম তৈরি করেছি যেখানে:"
            />
          </p>
          <div className="grid gap-6 tablet:grid-cols-2 tablet:items-center">
            <div className="redd">
              <Image
                src="/exelth-clinic-team.png"
                width={500}
                height={400}
                alt="Clinic team juggling tasks"
                className="sfu mx-auto"
              />
            </div>
            <div className="text-center text-xl tablet:text-left">
              {/* <h2 className="text-2xl font-semibold text-gray-800">
              Built for Healthcare Teams
            </h2> */}
              <p className="mt-4 text-gray-600">
                {/* Clinics & Hospitals can manage doctors, departments,
                appointments, billing, and patient records — all in one place. */}
                <TranslatableText
                  en="Clinics & Hospitals can manage doctors, departments,
                appointments, billing, and patient records — all in one place."
                  bn="ক্লিনিক এবং হাসপাতালগুলি ডাক্তার, বিভাগ,
অ্যাপয়েন্টমেন্ট, বিলিং এবং রোগীর রেকর্ড পরিচালনা করতে পারে — সবকিছুই এক জায়গায়।"
                />
              </p>
            </div>
          </div>
          <div className="grid gap-6 tablet:grid-cols-2 tablet:items-center">
            <div className="text-center text-xl tablet:text-left">
              {/* <h2 className="text-2xl font-semibold text-gray-800">
              Built for Healthcare Teams
            </h2> */}
              <p className="mt-4 text-gray-600">
                {/* Patients can book appointments, access prescriptions, view lab
                results, and manage their family&apos;s health history anytime,
                anywhere. */}
                <TranslatableText
                  en="Patients can book appointments, access prescriptions, view lab
                results, and manage their family's health history anytime,
                anywhere."
                  bn="রোগীরা যেকোনো সময়, যেকোনো জায়গায় অ্যাপয়েন্টমেন্ট বুক করতে পারবেন, প্রেসক্রিপশন অ্যাক্সেস করতে পারবেন, ল্যাবের ফলাফল দেখতে পারবেন এবং তাদের পরিবারের স্বাস্থ্য ইতিহাস পরিচালনা করতে পারবেন।"
                />
              </p>
            </div>
            <div className="redd">
              <Image
                src="/patient-peace.png"
                width={500}
                height={400}
                alt="Clinic team juggling tasks"
                className="sfu mx-auto"
              />
            </div>
          </div>
          <p className="text-based text-gray-800 laptop:text-xl">
            {/* Everything is synced in real-time, so everyone — from front desk to
            doctor to patient — is always on the same page. */}
            <TranslatableText
              en="Everything is synced in real-time, so everyone — from front desk to
            doctor to patient — is always on the same page."
              bn="সবকিছুই রিয়েল-টাইমে সিঙ্ক্রোনাইজ করা হয়, তাই ফ্রন্ট ডেস্ক থেকে ডাক্তার, রোগী - সবাই সবসময় একই পৃষ্ঠায় থাকে।"
            />
          </p>
        </div>
        {/* Your health, your way */}
        <div className="mx-auto max-w-5xl text-center">
          <h1 className="text-xl font-semibold text-gray-800 laptop:text-3xl">
            {/* Your health, your way */}
            <TranslatableText
              en=" Your health, your way"
              bn="তোমার স্বাস্থ্য, তোমার পথ"
            />
          </h1>
          <div className="grid gap-6 tablet:grid-cols-2 tablet:items-center">
            <div className="redd">
              <Image
                src="/just-exelth.png"
                width={500}
                height={400}
                alt="Clinic team juggling tasks"
                className="sfu mx-auto"
              />
            </div>
            <div className="text-center text-lg tablet:text-left">
              {/* <h2 className="text-2xl font-semibold text-gray-800">
              Built for Healthcare Teams
            </h2> */}
              <p className="mt-4 text-gray-600">
                {/* Exelth lets you run healthcare your way, not the other way
                around. <br /> No more juggling between tools, apps, and paper.{" "}
                <br />
                Everything you need is just there — secure, private, and
                available when you need it. */}
                <TranslatableText
                  en="Exelth lets you run healthcare your way, not the other way
                around. No more juggling between tools, apps, and paper.
                Everything you need is just there — secure, private, and
                available when you need it."
                  bn="এক্সেলথ আপনাকে স্বাস্থ্যসেবা আপনার মতো করে চালাতে দেয়, উল্টোটা নয়। আর কোনও টুল, অ্যাপ এবং কাগজের মধ্যে ঝামেলা করতে হবে না।
আপনার যা কিছু প্রয়োজন তা সবই আছে - নিরাপদ, ব্যক্তিগত এবং
প্রয়োজনে উপলব্ধ।"
                />
              </p>
            </div>
          </div>
        </div>
        {/* Exelth Building */}
        <div className="mx-auto max-w-5xl text-center">
          <h1 className="text-xl font-semibold text-gray-800 laptop:text-3xl">
            {/* we&apos;re just getting started */}
            <TranslatableText
              en=" we're just getting started"
              bn="আমরা সবে শুরু করছি।"
            />
          </h1>
          <div className="grid gap-6 tablet:grid-cols-2 tablet:items-center">
            <div className="redd">
              <Image
                src="/exelth-building.png"
                width={500}
                height={400}
                alt="Clinic team juggling tasks"
                className="sfu mx-auto"
              />
            </div>
            <div className="text-center text-lg tablet:text-left">
              {/* <h2 className="text-2xl font-semibold text-gray-800">
              Built for Healthcare Teams
            </h2> */}
              <p className="mt-4 text-gray-600">
                {/* That&apos;s why we&apos;re building{" "}
                <span className="text-green-600">Exelth</span> — to reimagine
                the way care is delivered, one appointment at a time. */}
                <TranslatableText
                  en="That's why we're building
               Exelth — to reimagine
                the way care is delivered, one appointment at a time."
                  bn="সেই কারণেই আমরা এক্সেল তৈরি করছি — যত্ন প্রদানের পদ্ধতি পুনর্কল্পনা করার জন্য, একের পর এক অ্যাপয়েন্টমেন্ট।"
                />
              </p>
              <p className="mt-4 text-gray-600">
                {/* if you&apos;re a healthcare organization that wants to run
                smarter, or a patient who wants better control of your care —
                we&apos;d love to have you onboard. */}
                <TranslatableText
                  en=" if you're a healthcare organization that wants to run
                smarter, or a patient who wants better control of your care —
                we'd love to have you onboard."
                  bn="যদি আপনি এমন একটি স্বাস্থ্যসেবা সংস্থা হন যারা আরও বুদ্ধিমানভাবে কাজ করতে চান, অথবা এমন একজন রোগী হন যিনি আপনার যত্নের উপর আরও ভাল নিয়ন্ত্রণ চান -
আমরা আপনাকে এতে সামিল করতে চাই।"
                />
              </p>
            </div>
          </div>
        </div>
        {/* Vision Section */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-semibold text-gray-800">
            {/* Our Vision for the Future */}
            <TranslatableText
              en=" Our Vision for the Future"
              bn="ভবিষ্যতের জন্য আমাদের দৃষ্টিভঙ্গি"
            />
          </h2>
          <p className="mt-4 text-gray-600 laptop:text-lg">
            {/* We believe healthcare should be connected, collaborative, and
            patient-first. Exelth bridges the gap between clinics and patients,
            making care proactive — not reactive. */}
            <TranslatableText
              en="We believe healthcare should be connected, collaborative, and
            patient-first. Exelth bridges the gap between clinics and patients,
            making care proactive — not reactive."
              bn="আমরা বিশ্বাস করি স্বাস্থ্যসেবা সংযুক্ত, সহযোগিতামূলক এবং
রোগী-প্রথম হওয়া উচিত। এক্সেলথ ক্লিনিক এবং রোগীদের মধ্যে ব্যবধান কমিয়ে দেয়,
যত্নকে সক্রিয় করে তোলে - প্রতিক্রিয়াশীল নয়।"
            />
          </p>
          <blockquote className="mt-6 italic text-gray-700">
            &quot;The best way to predict the future is to invent it.&quot;
            <br />— Alan Kay, Computing Pioneer
          </blockquote>
        </div>
      </section>

      {/* What We’re Building */}
      <section className="mx-auto mb-16 grid max-w-6xl gap-6 tablet:grid-cols-2">
        <div className="rounded-xl border p-6 shadow-sm">
          <h3 className="text-lg font-semibold">
            Exelth for Hospitals & Clinics
          </h3>
          <p className="mt-2 text-sm text-gray-600">
            Coordinate care, staff, billing, and patient discharge—all in one
            system.
          </p>
        </div>
        <div className="rounded-xl border p-6 shadow-sm">
          <h3 className="text-lg font-semibold">Exelth for Patients</h3>
          <p className="mt-2 text-sm text-gray-600">
            Book appointments, manage bills, track care plans, and stay
            informed—on mobile.
          </p>
        </div>
        <div className="rounded-xl border p-6 text-center shadow-sm tablet:col-span-2">
          <h3 className="text-lg font-semibold">Bridging Gaps in Care</h3>
          <p className="mt-2 text-sm text-gray-600">
            From the front desk to the bedside, Exelth makes information
            accessible and timely.
          </p>
          <video
            src="/Exelth-product-demo.webm"
            muted
            autoPlay
            loop
            className="mt-4 w-full rounded-lg"
          ></video>
        </div>
      </section>

      {/* Call to Action */}
      <section className="mx-auto mb-16 flex max-w-6xl items-center justify-center rounded-xl border bg-white p-8 text-center shadow-sm">
        <div>
          <h3 className="text-2xl font-semibold text-gray-800">
            Want to build with us?
          </h3>
          <p className="mt-2 text-sm text-gray-600">
            We&apos;re always looking for thoughtful people who care about
            healthcare and design. Engineers, designers, and domain experts
            welcome.
          </p>
          <Link
            href=""
            className="mt-4 inline-block rounded-full bg-green-600 px-6 py-2 text-sm font-medium text-white hover:bg-green-700"
          >
            Explore Careers
          </Link>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
