import React from 'react';

const UploadProduct = () => {
    return (
      <div>
        <div className="bg-green-200 gap-3 p-10 grid grid-cols-2">
          <div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">What is your product name?</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Upload Banner Image</span>
              </label>
              <input
                type="file"
                className="file-input file-input-bordered file-input-info w-full max-w-xs"
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label"></label>
              <button className="btn btn-outline btn-primary">Submit</button>
            </div>
          </div>
          <div className="grid gap-3">
            <textarea
              className="textarea textarea-info"
              placeholder="Bio"
            ></textarea>
          </div>
        </div>
      </div>
    );
};

export default UploadProduct;