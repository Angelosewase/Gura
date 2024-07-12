import Footer from "../components/footer";
import Header from "../components/header";

const Top = () => {
  return (
    <>
      <div className="flex justify-between mb-8 px-4  lg:px-0">
        <div className="lg:ml-20 mt-10 ">
          <span className="opacity-50">Home</span> /account
        </div>
        <div className="lg:mr-20 mt-10">
          <p>
            welcome! <span className="text-red-600">Sewase Angel</span>
          </p>
        </div>
      </div>
    </>
  );
};

const AccountDetailsCategories = (props) => {
  return (
    <>
      <div className="lg:ml-20 mb-4 ml-4">
        <div>
          <h2 className="font-semibold ">{props.header}</h2>
          <div className="ml-6 mt-2">
            <p className="text-base  text-gray-500">{props.categoryone}</p>
            <p className="text-base  text-gray-500">{props.categorytwo}</p>
            <p className="text-base  text-gray-500">{props.categotythree}</p>
          </div>
        </div>
      </div>
    </>
  );
};


const Account = () => {
  return (
    <>
      <Header profiledivclicked ={true}/>
      <div className="mt-8">
        <Top />

        <div className="grid md:grid-cols-4 grid-cols-1">
          <div className="hidden md:block">
            <AccountDetailsCategories
              header="Manage my account"
              categoryone="my profile"
              categorytwo="address book"
              categotythree="my payment options"
            />
            <AccountDetailsCategories
              header="My orders"
              categoryone="my return"
              categorytwo="My cancellations"
            />
            <AccountDetailsCategories header="My wishlist" />
          </div>

          <div className="col-span-3 lg:border-2 lg:px-10 py-8 lg:mr-20 border-gray-50 rounded-md  px-4 ">
            <h1 className="font-xl mb-2 text-red-500 font-semibold">
              Edit your profile
            </h1>
            <form className="lg:mr-20  ">
              <div className="grid grid-cols-2 mb-3 gap-2 md:gap-4">
                <div className="flex flex-col md:mr-6">
                  <label htmlFor="fistname">First Name</label>
                  <input
                    className="border-2 bg-gray-100 p-2 rounded-md outline-none placeholder:text-gray-500 mt-1 mb-2"
                    type="text"
                    name="firstname"
                    placeholder="sewase"
                  />
                </div>
                <div className="flex flex-col md:mr-6">
                  <label htmlFor="lastname">Last Name</label>
                  <input
                    className="border-2 bg-gray-100 p-2 rounded-md outline-none placeholder:text-gray-500 mt-1 mb-2"
                    type="text"
                    name="lastname"
                    placeholder="angel"
                  />
                </div>

                <div className="flex flex-col md:mr-6">
                  <label htmlFor="email">Email </label>
                  <input
                    className="border-2 bg-gray-100 p-2 rounded-md outline-none placeholder:text-gray-500 mt-1"
                    type="email"
                    name="email"
                    placeholder="email@example.com"
                  />
                </div>
                <div className="flex flex-col md:mr-6">
                  <label htmlFor="adress">Address </label>
                  <input
                    className="border-2 bg-gray-100 p-2 rounded-md outline-none placeholder:text-gray-500 mt-1"
                    type="email"
                    name="adress"
                    placeholder="user address"
                  />
                </div>
              </div>
              <div className="flex flex-col md:mr-6">
                <h4>password changes</h4>
                <input
                  className="border-2 my-1.5 rounded-md p-2 bg-gray-100 outline-none"
                  type="text"
                  name="currentpassword"
                  placeholder="current password"
                />
                <input
                  className="border-2 my-1.5 rounded-md p-2 bg-gray-100 outline-none"
                  type="password"
                  name="newpassword"
                  placeholder="new password"
                />
                <input
                  className="border-2 my-1.5 rounded-md p-2 bg-gray-100 outline-none"
                  type="password"
                  name="confirmedpassword"
                  placeholder="confirm new  password"
                />
              </div>

              <div className="md:mr-6 flex justify-end mt-4">
                <button type="button"  className="py-3 px-8 hover:bg-gray-100 rounded-sm">cancel</button>
                <button className="bg-red-600 py-3 px-10 text-sm  ml-7 rounded-sm text-gray-100">save changes</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Account;
