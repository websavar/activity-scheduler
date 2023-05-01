import { Fragment, useState, useEffect } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { chevronDownIcon } from 'assets/images/svgIcons'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function DropDown({
  items,
  itemName,
  inputChange,
  resetOptions,
  defaultValue,
  disabled
}) {
  const [option, setOption] = useState(defaultValue);

  useEffect(() => {
    if (resetOptions) setOption('');
  }, [resetOptions]);

  return (
    <Menu as="div" className="relative inline-block text-left w-full">
      <div>
        <Menu.Button
          disabled={disabled}
          className={`inline-flex w-full justify-between items-center gap-x-1.5 bg-white px-3 py-2 text-sm font-semibold text-gray-900 rounded-md ${!disabled && 'shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'}`}
        >
          {option ? option : <div className='text-gray-500'>Select a {itemName}</div>}
          {!disabled && chevronDownIcon}
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
        <Menu.Items className="absolute left-0 z-10 mt-0 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {items.map(item => {
              return (
                <Menu.Item key={item}>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm'
                      )}
                      onClick={() => {
                        setOption(item);
                        inputChange(itemName, item)
                      }}
                    >
                      {item}
                    </a>
                  )}
                </Menu.Item>
              )
            })}
          </div>
        </Menu.Items>
      </Transition>
    </Menu >
  )
}
