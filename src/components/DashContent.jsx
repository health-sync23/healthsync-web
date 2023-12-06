import React, { useEffect } from "react";
import { MedicationCard, QuickActionButton } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../features/getUserSlice";
import { styles } from "../constants/styles";
import { getReminders } from "../features/getUserRemindersSlice";

const DashContent = () => {
  const dispatch = useDispatch();

  const { accessToken, userId } = useSelector((state) => state.loginpatient);

  const { user } = useSelector((state) => state.getuser);

  const { reminders } = useSelector((state) => state.getreminders);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (accessToken && userId) {
          const userData = await dispatch(getUser()).unwrap();
          const userReminder = await dispatch(getReminders()).unwrap();
          console.log(userData);
        }
      } catch (error) {
        console.error("Error fetching user data:", error.message);
      }
    };

    fetchData();
  }, [accessToken, userId, dispatch]);

  const drugs =
    reminders &&
    reminders.patientReminders &&
    reminders.patientReminders.length ? (
      reminders.patientReminders.map((rm) => {
        console.log(rm);
        return (
          <MedicationCard
            title={rm.drug_name}
            days={rm.reminder_frequency}
            percent="75%"
          />
        );
      })
    ) : (
      <p>You have no medication alerts</p>
    );

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
          {drugs}
          {/* <MedicationCard title="Paracetamol" days="2/3 days" percent="75%" />
          <MedicationCard title="Ibuprofen" days="1/5 days" percent="20%" />
          <MedicationCard title="Ampliclox" days="3/4 days" percent="75%" />
          <MedicationCard title="Cara" days="2/7 days" percent="29%" /> */}
        </div>
      </article>
      <article className="flex flex-col gap-6">
        <h3 className="text-xl ">Quick Actions</h3>
        <div className="flex flex-col gap-4">
          <QuickActionButton title="Medications" path="/reminders" />
          <QuickActionButton title="Appointments" path="/appointments" />
          <QuickActionButton title="Analytics" path="/analytics" />
        </div>
      </article>
    </div>
  );
};

export default DashContent;
