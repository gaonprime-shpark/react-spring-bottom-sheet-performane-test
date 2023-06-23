import { aside, scrollable, simple, sticky } from '../docs/headings'
import Footer from '../docs/Footer'
import Hero from '../docs/Hero'
import MetaTags from '../docs/MetaTags'
import Nugget from '../docs/Nugget'
import StickyNugget from '../docs/StickyNugget'
import type { NextPage } from 'next'
import type { GetStaticProps } from './_app'

import {
  motion,
  useAnimation,
  useDragControls,
  useMotionValue,
  useScroll,
} from 'framer-motion'
import { FC, HTMLAttributes, useEffect, useRef, useState } from 'react'
import { Card } from './fixtures/Card'
import { Keyword } from './fixtures/Keyword'
import { BottomSheetRef, BottomSheet } from '../src'
import React from 'react'

export { getStaticProps } from './_app'

const IndexPage: NextPage<GetStaticProps> = ({
  name,
  version,
  description,
  homepage,
  meta,
  reactSpringVersion,
  reactUseGestureVersion,
}) => {
  const sheetRef = useRef<BottomSheetRef>()

  return (
    <>
      <main>
        <BottomSheet2></BottomSheet2>
        {/* <BottomSheet
          open
          ref={sheetRef}
          blocking={false}
          expandOnContentDrag={true}
          skipInitialTransition={true}
          snapPoints={() => {
            return [500, 68]
          }}
          defaultSnap={() => {
            return 500
          }}
          // onSpringEnd={springEnd}
          springConfig={{
            clamp: true,
            tension: 400,
            precision: 0.0001,
            duration: 150,
          }}
          header={
            <div
              className="absolute left-0 top-0 h-[68px] w-full  rounded-t-xl bg-white pb-[18px]  "
              onClick={() => {
                if (sheetRef.current) {
                  if (sheetRef.current.height === 68) {
                    sheetRef.current.snapTo(500)
                  } else {
                    sheetRef.current.snapTo(68)
                  }
                }
              }}
            >
              공두내꺼 움겔탱
            </div>
          }
        >
          <div className="flex gap-[15px] overflow-x-auto  pb-8 hide-scrollbar">
            <div className="flex gap-[15px]">
              {funeralHomeMocking.map((item) => {
                return <FuneralHomeCard {...item} key={item.title} />
              })}
              {funeralHomeMocking.map((item) => {
                return <FuneralHomeCard {...item} key={item.title} />
              })}
              {funeralHomeMocking.map((item) => {
                return <FuneralHomeCard {...item} key={item.title} />
              })}
              {funeralHomeMocking.map((item) => {
                return <FuneralHomeCard {...item} key={item.title} />
              })}
              {funeralHomeMocking.map((item) => {
                return <FuneralHomeCard {...item} key={item.title} />
              })}
              {funeralHomeMocking.map((item) => {
                return <FuneralHomeCard {...item} key={item.title} />
              })}
              {funeralHomeMocking.map((item) => {
                return <FuneralHomeCard {...item} key={item.title} />
              })}
              {funeralHomeMocking.map((item) => {
                return <FuneralHomeCard {...item} key={item.title} />
              })}
              {funeralHomeMocking.map((item) => {
                return <FuneralHomeCard {...item} key={item.title} />
              })}
              {funeralHomeMocking.map((item) => {
                return <FuneralHomeCard {...item} key={item.title} />
              })}
            </div>
          </div>
          <div className="flex gap-[15px] overflow-x-auto  pb-8 hide-scrollbar">
            <div className="flex flex-col gap-[15px]">
              {funeralHomeMocking.map((item) => {
                return <FuneralHomeCard {...item} key={item.title} />
              })}
            </div>
          </div>
          <div className="flex gap-[15px] overflow-x-auto  pb-8 hide-scrollbar">
            <div className="flex flex-col gap-[15px]">
              {funeralHomeMocking.map((item) => {
                return <FuneralHomeCard {...item} key={item.title} />
              })}
            </div>
          </div>
          <div className="flex gap-[15px] overflow-x-auto  pb-8 hide-scrollbar">
            <div className="flex flex-col gap-[15px]">
              {funeralHomeMocking.map((item) => {
                return <FuneralHomeCard {...item} key={item.title} />
              })}
            </div>
          </div>
          <div className="flex gap-[15px] overflow-x-auto  pb-8 hide-scrollbar">
            <div className="flex flex-col gap-[15px]">
              {funeralHomeMocking.map((item) => {
                return <FuneralHomeCard {...item} key={item.title} />
              })}
              {funeralHomeMocking.map((item) => {
                return <FuneralHomeCard {...item} key={item.title} />
              })}
              {funeralHomeMocking.map((item) => {
                return <FuneralHomeCard {...item} key={item.title} />
              })}
              {funeralHomeMocking.map((item) => {
                return <FuneralHomeCard {...item} key={item.title} />
              })}
              {funeralHomeMocking.map((item) => {
                return <FuneralHomeCard {...item} key={item.title} />
              })}
              {funeralHomeMocking.map((item) => {
                return <FuneralHomeCard {...item} key={item.title} />
              })}
              {funeralHomeMocking.map((item) => {
                return <FuneralHomeCard {...item} key={item.title} />
              })}
              {funeralHomeMocking.map((item) => {
                return <FuneralHomeCard {...item} key={item.title} />
              })}
            </div>
          </div>
          <div className="flex gap-[15px] overflow-x-auto  pb-8 hide-scrollbar">
            <div className="flex flex-col gap-[15px]">
              {funeralHomeMocking.map((item) => {
                return <FuneralHomeCard {...item} key={item.title} />
              })}
            </div>
          </div>
        </BottomSheet> */}
      </main>
    </>
  )
}

export default IndexPage

export interface RecentFuneralHomeCardProps
  extends HTMLAttributes<HTMLDivElement> {
  title: string
  url: string
}

export interface FuneralHomeCardProps {
  title: string
  rate: number
  review: number
  address: string
  keywords: string[]
  price: number
  url: string
  x: string
  y: string
  className?: string
}

const FuneralHomeCard: FC<FuneralHomeCardProps> = ({
  title,
  rate,
  review,
  address,
  keywords,
  price,
  url,
  className,
}) => {
  return (
    <Card
      className={`flex min-w-[278px] shrink-0 flex-col gap-[10px] ${className}`}
    >
      {/* 이미지 */}
      <img
        src={url}
        alt="funeralHome"
        className="h-[198px] w-full rounded-xl object-cover"
      ></img>

      <div className="px-[10px]">
        {/* 이름, 별점 */}
        <div className="mb-[5px] flex items-start justify-between">
          <p className="text-18 font-bold">{title}</p>
          <div className="flex items-center"></div>
        </div>
        {/* 주소 */}
        <Address address={address} className="text-12" />
      </div>
      {/* 태그 */}
      {keywords && (
        <div className="flex flex-wrap gap-[6px] px-[10px]">
          {keywords.map((item) => {
            return <Keyword key={item}>{item}</Keyword>
          })}
        </div>
      )}

      {/* 가격 */}
      <div className="relative  flex items-start justify-end p-[10px]">
        <span className="relative top-1 align-top text-12 text-point-pink">
          최저가
        </span>
        <span className="ml-[5px] text-20 font-bold">
          {price ? `${(price ?? 0).toLocaleString()}원` : '가격 미등록'}
          <span className="align-top text-12">{` ~`}</span>
        </span>
      </div>
    </Card>
  )
}

interface AddressProps extends HTMLAttributes<HTMLDivElement> {
  address?: string
  distance?: number
}

const Address: FC<AddressProps> = ({
  address,
  distance,
  className,
  ...props
}) => {
  return (
    <div className={`flex items-center  break-keep ${className}`} {...props}>
      <span>{address}</span>
      {distance && <span className="font-medium">{`${distance}`}</span>}
    </div>
  )
}

export const funeralHomeMocking = [
  {
    title: '포포스',
    rate: 2,
    review: 1102,
    address: '서울 광진구 가로수길',
    keywords: [
      '굿나잇버디',
      '굿나잇',
      '버디',
      '버디버디',
      '네이트온싸이월드네이트온싸이월드',
    ],
    price: 213126,
    url: 'https://i.namu.wiki/i/09TmbjtlbcUOXvzGJWkkjnObVKGOTh7jME7eqse_69NMQKJwYoUGnS7fIgr0dHGf_4A_DptAG3Q2lUhFlP6GPg.webp',
    x: '126.956648620283',
    y: '37.4805340354467',
  },
  {
    title: '아구몬',
    rate: 3,
    review: 1102,
    address: '서울 광진구 가로수길',
    keywords: ['굿나잇버디', '굿나잇', '버디'],
    price: 214556,
    url: 'https://upload.wikimedia.org/wikipedia/en/a/a6/Pok%C3%A9mon_Pikachu_art.png',
    x: '126.94',
    y: '37.47',
  },
  {
    title: '파파존스1',
    rate: 5,
    review: 0,
    address: '서울 광진구 가로수길',
    keywords: [],
    price: 2134556,
    url: 'https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/interior3ds/167400552441937308.png?gif=1&w=480&h=320&c=c&q=80&webp=1',
    x: '126.95',
    y: '37.48',
  },
  {
    title: '파파존스2',
    rate: 5,
    review: 0,
    address: '서울 광진구 가로수길',
    keywords: [],
    price: 21356,
    url: 'https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/interior3ds/167400552441937308.png?gif=1&w=480&h=320&c=c&q=80&webp=1',
    x: '128.7260144',
    y: '35.718096',
  },
  {
    title: '파파존스3',
    rate: 5,
    review: 0,
    address: '서울 광진구 가로수길',
    keywords: [],
    price: 213556,
    url: 'https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/interior3ds/167400552441937308.png?gif=1&w=480&h=320&c=c&q=80&webp=1',
    x: '129.040706',
    y: '35.4533003',
  },
]
const BottomSheet2 = () => {
  const controls = useAnimation()
  const sheetRef = React.useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState('top')
  const [isDrag, setIsDrag] = useState(true)

  const onDragEnd = (event, info) => {
    const shouldClose =
      info.velocity.y > 20 || (info.velocity.y > 5 && info.point.y > 45)
    if (shouldClose) {
      console.log('닫기')
      controls.start('bottom')
      setPosition('bottom')
    } else {
      console.log('열기')

      controls.start('top')
      setPosition('top')

      if (sheetRef.current.scrollTop === 0) {
        setIsDrag(true)
      } else {
        setIsDrag(false)
      }
    }
  }

  const OnDrag = () => {
    if (sheetRef.current.scrollTop === 0) {
      setIsDrag(true)
    }
  }

  return (
    <motion.div
      // onDragStart={OnDrag}
      onDragEnd={onDragEnd}
      drag={isDrag ? 'y' : null}
      dragConstraints={{ top: 0, bottom: 0 }}
      variants={{
        top: { bottom: 0 },
        bottom: { bottom: '-70vh' },
      }}
      initial={position}
      animate={controls}
      style={{
        background: 'white',
        height: '80vh',
        width: '100vw',
        position: 'fixed',
        overflow: 'hidden',
        bottom: 0,
        left: 0,
        borderTopLeftRadius: '20px',
        borderTopRightRadius: '20px',
        boxShadow: '0px -2px 10px rgba(0,0,0,0.1)',
        touchAction: 'none',
      }}
      transition={{ type: 'spring', bounce: 0 }}
    >
      {/* Sheet Content */}
      <div className=" absolute w-full h-10 bg-red-200">
        헤더
        {`'isDrag':${isDrag}`}
      </div>
      <div
        style={{
          overflow: position === 'top' ? 'auto' : 'hidden',
          height: '100%',
        }}
        ref={sheetRef}
        onScroll={OnDrag}
      >
        <div className="h-[300px] bg-yellow-200">h</div>
        <div className="flex gap-[15px] overflow-x-auto  pb-8 hide-scrollbar">
          <div className="flex gap-[15px]">
            {funeralHomeMocking.map((item) => {
              return <FuneralHomeCard {...item} key={item.title} />
            })}
            {funeralHomeMocking.map((item) => {
              return <FuneralHomeCard {...item} key={item.title} />
            })}
            {funeralHomeMocking.map((item) => {
              return <FuneralHomeCard {...item} key={item.title} />
            })}
          </div>
        </div>
        <div className="h-[300px] bg-green-200">h</div>
        <div className="h-[300px] bg-red-200">h</div>
        <div className="h-[300px] bg-blue-200">h</div>
        <div className="h-[300px] bg-green-200">h</div>
        <div className="h-[300px] bg-black">h</div>
        <div className="h-[300px] bg-yellow-200">h</div>
        <div className="h-[300px] bg-yellow-200">h</div>
      </div>
    </motion.div>
  )
}
