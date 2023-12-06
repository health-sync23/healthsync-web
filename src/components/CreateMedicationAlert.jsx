import React, { useEffect, useState } from "react";
import { FormError, Input } from "../components";
import { styles } from "../constants/styles";
import { BiArrowToLeft } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createReminder, resetError } from "../features/createReminderSlice";
import Modal from "./Modal";
import { HiCheckCircle } from "react-icons/hi";

const initialState = {
  drugName: "",
  drugType: "",
  dosage: "",
  frequency: "",
  time: "",
  note: "",
};

const CreateMedicationAlert = ({ showModal, SetShowModal }) => {
  const [form, setForm] = useState(initialState);

  const { isLoading, isCreated, createReminderError } = useSelector(
    (state) => state.createreminder
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleInputChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleCreateAlert(e) {
    e.preventDefault();
    console.log(form);
    dispatch(createReminder(form));
  }

  useEffect(() => {
    if (isCreated) {
      setTimeout(() => {
        navigate("/reminders");
      }, 2000);
    }
  }, [isCreated]);

  return (
    <div
      className={
        showModal
          ? "bg-black bg-opacity-80 absolute w-full top-0 left-0 min-h-screen p-6 flex flex-col"
          : "hidden"
      }
    >
      <span
        className="text-white flex underline items-center justify-end font-light cursor-pointer"
        onClick={() => SetShowModal(false)}
      >
        <BiArrowToLeft />
        Close
      </span>
      <h3 className="my-10 text-white font-semibold">Create New Medication.</h3>
      <form
        action=""
        className="flex flex-col gap-6"
        onSubmit={handleCreateAlert}
      >
        <label htmlFor="">
          <Input
            type="text"
            placeholder="Drug Name"
            customClass={`p-2 border w-full`}
            value={form.drugName}
            onChange={handleInputChange}
            name="drugName"
          />
        </label>
        <label htmlFor="">
          <Input
            type="text"
            placeholder="Drug Type"
            customClass={`p-2 border w-full`}
            value={form.drugType}
            onChange={handleInputChange}
            name="drugType"
          />
        </label>
        <label htmlFor="">
          <Input
            type="text"
            placeholder="Dosage"
            customClass={`p-2 border w-full`}
            value={form.dosage}
            onChange={handleInputChange}
            name="dosage"
          />
        </label>
        <label htmlFor="">
          <Input
            type="text"
            placeholder="Reminder frequency e.g daily"
            customClass={`p-2 border w-full`}
            value={form.frequency}
            onChange={handleInputChange}
            name="frequency"
          />
        </label>
        <label htmlFor="">
          <Input
            type="text"
            placeholder="Time"
            customClass={`p-2 border w-full`}
            value={form.time}
            onChange={handleInputChange}
            name="time"
          />
        </label>
        <label htmlFor="">
          <textarea
            cols="30"
            rows="10"
            placeholder="Additional Note"
            className={`p-2 border w-full`}
            value={form.note}
            onChange={handleInputChange}
            name="note"
          ></textarea>
        </label>
        {/* success */}
        <div>
          {isCreated && (
            <Modal
              icon={<HiCheckCircle />}
              message="Reminder created succesfully."
            />
          )}
        </div>
        {/* error */}
        <div>
          {createReminderError && (
            <FormError
              text={createReminderError}
              customError={createReminderError}
              customReset={resetError}
            />
          )}
        </div>
        <button className={`${styles.bg.primary} p-2 rounded-lg`}>
          {!isLoading ? "Create Reminder" : "Creating Reminder..."}
        </button>
      </form>
    </div>
  );
};

export default CreateMedicationAlert;
