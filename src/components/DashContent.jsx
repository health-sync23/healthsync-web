import React, { useEffect } from "react";
import { MedicationCard, QuickActionButton } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../features/getUserSlice";
import { styles } from "../constants/styles";

const DashContent = () => {
  const dispatch = useDispatch();

  const { accessToken, userId } = useSelector((state) => state.loginpatient);

  const { user } = useSelector((state) => state.getuser);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (accessToken && userId) {
          const userData = await dispatch(getUser()).unwrap();
          console.log(userData);
        }
      } catch (error) {
        console.error("Error fetching user data:", error.message);
      }
    };

    fetchData();
  }, [accessToken, userId, dispatch]);

  return (
    <div className="flex flex-col gap-6">
      <h3 className={` font-extralight ${styles.text.primary} `}>
        Welcome back,{" "}
        {user ? <span className="capitalize">{user.user.fullname}</span> : null}
      </h3>
      <figure>
        <img src="" alt="" />
      </figure>
      <article className="flex flex-col gap-6">
        <h3 className="text-xl">Active Medications</h3>
        {/* completed medication box */}
        <div className="flex flex-row gap-6 overflow-x-scroll">
          <MedicationCard title="Paracetamol" days="2/3 days" percent="75%" />
          <MedicationCard title="Ibuprofen" days="1/5 days" percent="20%" />
          <MedicationCard title="Ampliclox" days="3/4 days" percent="75%" />
          <MedicationCard title="Cara" days="2/7 days" percent="29%" />
        </div>
      </article>
      <article className="flex flex-col gap-6">
        <h3 className="text-xl ">Quick Actions</h3>
        <div className="flex flex-col gap-4">
          <QuickActionButton title="Medications" path="/medications" />
          <QuickActionButton title="Appointments" path="/appointments" />
          <QuickActionButton title="Analytics" path="/analytics" />
        </div>
      </article>
    </div>
  );
};

export default DashContent;
