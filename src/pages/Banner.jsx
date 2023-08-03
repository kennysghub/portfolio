/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import grpcConf from '@/images/grpc-conf.jpeg'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { CodeBracketIcon, EllipsisVerticalIcon, FlagIcon, StarIcon } from '@heroicons/react/20/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Banner() {
  return (
    <div className=" px-4 py-5 sm:px-6 rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40 ">
      <div className="flex space-x-3">
        <div className="flex-shrink-1 ">
          <Image
            className="h-23 w-45"
            src={grpcConf}
            alt=""
            width="200"
            height="100"
          />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold text-gray-900 dark:text-white">
            <a  href="https://sessionize.com/kenny-nguyen/"
                        target="_blank"
                        rel="noreferrer" className="hover:underline">
              Kenny's Events
            </a>
          </p>
          <p className="text-sm text-gray-500">
            <a href="#" className="hover:underline">
             SPEAKER September 2023
            </a>
          </p>
        </div>
        <div className="flex flex-shrink-0 self-center">
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="-m-2 flex items-center rounded-full p-2 text-gray-400 hover:text-gray-600">
                <span className="sr-only">Open options</span>
                <EllipsisVerticalIcon className="h-5 w-5" aria-hidden="true" />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="https://sessionize.com/kenny-nguyen/"
                        target="_blank"
                        rel="noreferrer"
                        className={classNames(
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                          'flex px-4 py-2 text-sm'
                        )}
                      >
                        {/* <StarIcon className="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" /> */}
                        <span>Sunyvale, California, United States</span>
                      </a>
                    )}
                  </Menu.Item>
                  {/* <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                          'flex px-4 py-2 text-sm'
                        )}
                      >
                        <CodeBracketIcon className="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                        <span>Embed</span>
                      </a>
                    )}
                  </Menu.Item> */}
                  {/* <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                          'flex px-4 py-2 text-sm'
                        )}
                      >
                        <FlagIcon className="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                        <span>Report content</span>
                      </a>
                    )}
                  </Menu.Item> */}
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
    </div>
  )
}
