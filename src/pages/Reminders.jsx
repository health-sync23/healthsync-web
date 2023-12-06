import React, { useEffect, useState } from "react";

import { BsFillHouseExclamationFill, BsFilter, BsPlus } from "react-icons/bs";
import CreateMedicationAlert from "../components/CreateMedicationAlert";
import { styles } from "../constants/styles";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { notify } from "../assets";
import ErrorBoundary from "../hoc/ErrorBoundary";
// import { getReminders } from "../features/getUserRemindersSlice";

const Reminders = () => {
  const [showModal, SetShowModal] = useState(false);
  // const dispatch = useDispatch();
  // // const navigate = useNavigate();

  // const { accessToken, userId } = useSelector((state) => state.loginpatient);

  // useEffect(() => {
  //   if (accessToken && userId) {
  //     dispatch(getReminders());
  //   }
  // }, [accessToken, userId, dispatch]);

  const { reminders } = useSelector((state) => state.getreminders);

  console.log(`MYREMINDERS ${reminders.patientReminders.length}`);

  const myReminders =
    reminders && reminders.patientReminders && reminders.patientReminders.length
      ? reminders.patientReminders.map((rm) => {
          console.log(rm);
          return (
            <li
              key={rm._id}
              className="flex justify-between p-2 font-extralight"
            >
              <span>{rm.drug_name}</span>
              <span>{rm.reminder_frequency}</span>
              <span>{rm.status}</span>
            </li>
          );
        })
      : null;

  function handleModal() {
    SetShowModal(true);
  }

  // console.log("Reminders:", reminders.patientReminders.length);

  return (
    <ErrorBoundary>
      <section className="p-6 flex flex-col gap-6">
        <span>
          <Link to="/patient-dash">
            <BsFillHouseExclamationFill />
          </Link>
        </span>
        <div className="flex justify-between items-center">
          <h3 className="text-sm whitespace-nowrap capitalize font-extralight">
            Your medication reminders
          </h3>
          <span className="flex gap-1 items-center text-xs">
            <BsFilter />
            <select name="" id="">
              <option value="all">All</option>
              <option value="active">Active</option>
              <option value="completed">Completed</option>
            </select>
          </span>
        </div>
        <div className={`flex justify-end`}>
          <button
            className={`flex items-center cursor-pointer ${styles.bg.primary} py-2 px-4 rounded-md font-light text-sm`}
            onClick={handleModal}
          >
            <BsPlus />
            Create alert
          </button>
        </div>
        {/* alerts */}
        <article>
          <span className={`text-xs font-extralight p-2`}>
            You have
            {reminders ? (
              <span className="font-semibold mx-1">
                {reminders.patientReminders.length}
              </span>
            ) : (
              <span className="font-semibold">0</span>
            )}
            active reminder(s)
          </span>
          <div>
            {reminders && reminders.patientReminders ? (
              reminders.patientReminders.length !== 0 ? (
                <ul className={`border-2 ${styles.border.primary} rounded-lg`}>
                  <li
                    className={`flex justify-between p-2 ${styles.bg.primary}`}
                  >
                    <span>Drugname</span>
                    <span>Frequency</span>
                    <span>Status</span>
                  </li>
                  {myReminders}
                </ul>
              ) : (
                <div
                  className={`flex items-center justify-center min-h-[400px]`}
                >
                  <img src={notify} alt="" className="w-[250px]" />
                </div>
              )
            ) : null}
          </div>
        </article>
        {/* create alert component */}
        <article>
          <CreateMedicationAlert
            showModal={showModal}
            SetShowModal={SetShowModal}
          />
        </article>
      </section>
    </ErrorBoundary>
  );
};

export default Reminders;
