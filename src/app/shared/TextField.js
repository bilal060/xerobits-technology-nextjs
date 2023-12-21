import React from 'react';
import { ErrorMessage, useField } from 'formik';

const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  if (props.textarea) {
    return (
      <div className="mb-4">
        {label && (
          <label htmlFor={field.name} className="block ">
            {label}
          </label>
        )}
        <textarea
          className={`bg-[#23222D]    text-lightGray text-[16px] rounded focus:ring-purple focus:border-purple focus:outline-none block w-full p-2.5 dark:bg-[#23222D] dark:border-purple dark:placeholder-lightGray dark:text-dark dark:focus:ring-purple dark:focus:border-purple ${
            meta.touched && meta.error ? 'border border-red-500' : 'border-0'
          }`}
          {...field}
          {...props}
          min="4"
          rows="4"
        ></textarea>
        <ErrorMessage
          component="small"
          name={field.name}
          className="text-red-500 font-tripsans font-normal text-[16px] pt-2"
        />
      </div>
    );
  } else {
    return (
      <div className=" mt-3">
        {label && (
          <label htmlFor={field.name} className="block ">
            {label}
          </label>
        )}
        <input
          className={`bg-[#23222D] h-[36px] md:h-[48px]  text-lightGray text-[16px] rounded focus:ring-purple focus:border-purple focus:outline-none block w-full p-2.5 dark:bg-[#23222D] dark:border-purple dark:placeholder-lightGray dark:text-lightGray dark:focus:ring-purple dark:focus:border-purple ${
            meta.touched && meta.error?.length
              ? 'border border-red-500'
              : 'border-0'
          }`}
          {...field}
          {...props}
        />
        <ErrorMessage
          component="p"
          name={field.name}
          className="text-red-500 font-tripsans font-normal text-[16px] mt-2"
        />
      </div>
    );
  }
};

export default TextField;
