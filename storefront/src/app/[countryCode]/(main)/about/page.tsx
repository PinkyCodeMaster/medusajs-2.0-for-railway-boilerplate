"use client"

import React from 'react'
import Image from 'next/image'
import { Button, Input, Text, Heading, Container } from '@medusajs/ui'
import { Mail, MapPin, Phone } from 'lucide-react'

export default function AboutPage() {
    return (
        <div className="small:flex-row small:items-start py-6 content-container">
            <Heading level="h1" className="mb-6 text-4xl md:text-7xl">About Frontline Military Supplies</Heading>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className='text-2xl'>
                    <Text className="mb-4 text-lg md:text-2xl">
                        From opening our doors in the summer of 2013, Frontline Military Supplies has grown considerably and adapted itself to meet the demanding requirements of the modern soldier serving in the British army.
                    </Text>
                    <Text className="mb-4 text-lg md:text-2xl">
                        We are located on the doorstep of the Royal Artillery, which is soon to become a super garrison. As a small family-run business, we love to give great care and advice to each of our customers, sourcing products and providing a tailor-made service so that each client receives the high-performance equipment they deserve.
                    </Text>
                    <Text className="mb-4 text-lg md:text-2xl">
                        Frontline Military Supplies hosts a wide range of extremely high-quality equipment, the biggest brands retailed worldwide boasting world-class performance. If you can&apos;t find what you are looking for, we will find it for you.
                    </Text>
                    <Text className="font-semibold text-lg md:text-2xl">
                        Gill and Laura are always happy to help with a friendly warm welcome.
                    </Text>
                </div>
                <div className="relative h-[300px] md:h-[600px] rounded-lg overflow-hidden">
                    <Image
                        src="https://utfs.io/f/Ez0xBUkcqGmdQMy63V5ypUR3cJqk5TbtGCNA6vjWYHPdeS9D"
                        alt="Frontline Military Supplies Store Front"
                        className='object-cover'
                        fill
                    />
                </div>
            </div>
            <div className="bg-ui-bg-base p-6 mb-12 text-center border-t-2">
                <Heading level="h2" className="mb-6 text-4xl md:text-7xl">Join Our Mailing List</Heading>
                <Text className="mb-4 text-lg md:text-2xl">Stay updated with our latest products, special offers, and military supply news.</Text>
                <form className="flex gap-4 justify-center">
                    <Input type="email" placeholder="Enter your email" className="flex-grow px-6" />
                    <Button type="submit">Subscribe</Button>
                </form>
            </div>


        </div>
    )
}