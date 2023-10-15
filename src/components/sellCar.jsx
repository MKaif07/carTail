import { Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
const CarSchema = Yup.object().shape({
  name: Yup.string().required("Required").max(50),
  brand: Yup.string().required("Required").max(50),
  year: Yup.number().required("Required"),
  price: Yup.number().required("Required").max(10000000),
  image1: Yup.string(),
  image2: Yup.string(),
  image3: Yup.string(),
});

function SellCar() {
  return (
    <div className="bg-gray-400 flex items-center justify-center">
      <div className="bg-white m-10 lg:w-5/12 md:6/12 w-10/12 shadow-3xl">
        {/* <div className="bg-gray-800 absolute left-1/2 transform -translate-x-1/2  rounded-full p-4 md:p-8">
          <h1>Add Car to sell</h1>
        </div> */}
        <div className="flex justify-around mt-5 -mb-20 ">
          <DirectionsCarIcon sx={{ alignSelf: "center" }} fontSize="large" />
        </div>
        <Formik
          initialValues={{
            name: "",
            brand: "",
            year: "",
            price: "",
            image1: "",
            image2: "",
            image3: "",
          }}
          onSubmit={(values) => {
            console.log(values);
          }}
          validationSchema={CarSchema}
        >
          {({ errors, touched }) => (
            <Form className="p-12 md:p-24">
              <div className="flex items-center text-lg mb-6 md:mb-8">
                <div className="text-red-600 w-full">
                  <Field
                    name="name"
                    className="text-black bg-gray-200 pl-4 py-2 md:py-4 focus:outline-none w-full"
                    placeholder="Name"
                  />
                  {errors.name && touched.name ? (
                    <div>{errors.name}</div>
                  ) : null}
                </div>
              </div>
              <div className="flex items-center text-lg mb-6 md:mb-8">
                <div className="text-red-600 w-full">
                  <Field
                    name="brand"
                    className="text-black bg-gray-200 pl-4 py-2 md:py-4 focus:outline-none w-full"
                    placeholder="Brand"
                  />
                  {errors.brand && touched.brand ? (
                    <div>{errors.brand}</div>
                  ) : null}
                </div>
              </div>
              <div className="flex items-center text-lg mb-6 md:mb-8">
                <div className="text-red-600 w-full">
                  <Field
                    name="year"
                    className="text-black bg-gray-200 pl-4 py-2 md:py-4 focus:outline-none w-full"
                    placeholder="Year"
                  />
                  {errors.year && touched.year ? (
                    <div>{errors.year}</div>
                  ) : null}
                </div>
              </div>
              <div className="flex items-center text-lg mb-6 md:mb-8">
                <div className="text-red-600 w-full">
                  <Field
                    name="price"
                    className="text-black bg-gray-200 pl-4 py-2 md:py-4 focus:outline-none w-full"
                    placeholder="Price"
                  />
                  {errors.price && touched.price ? (
                    <div>{errors.price}</div>
                  ) : null}
                </div>
              </div>
              <div className="flex items-center text-lg mb-6 md:mb-8">
                <div className="text-red-600 w-full">
                  <Field
                    name="image1"
                    className="text-black bg-gray-200 pl-4 py-2 md:py-4 focus:outline-none w-full"
                    placeholder="Image 1"
                  />
                  {errors.image1 && touched.image1 ? (
                    <div>{errors.image1}</div>
                  ) : null}
                </div>
              </div>
              <div className="flex items-center text-lg mb-6 md:mb-8">
                <div className="text-red-600 w-full">
                  <Field
                    name="image2"
                    className="text-black bg-gray-200 pl-4 py-2 md:py-4 focus:outline-none w-full"
                    placeholder="Image 2"
                  />
                  {errors.image2 && touched.image2 ? (
                    <div>{errors.image2}</div>
                  ) : null}
                </div>
              </div>
              <div className="flex items-center text-lg mb-6 md:mb-8">
                <div className="text-red-600 w-full">
                  <Field
                    name="image3"
                    className="text-black bg-gray-200 pl-4 py-2 md:py-4 focus:outline-none w-full"
                    placeholder="Image 3"
                  />
                  {errors.image3 && touched.image3 ? (
                    <div>{errors.image3}</div>
                  ) : null}
                </div>
              </div>

              <button
                type="submit"
                className="bg-gradient-to-b from-gray-700 to-gray-900 font-medium p-2 md:p-4 text-white uppercase w-full"
                onSubmit={() => handleSubmit(e)}
              >
                Add Car
              </button>
              <p>
                <Link to="/" className="text-green-700">
                  {" "}
                  Cancel
                </Link>
              </p>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default SellCar;
