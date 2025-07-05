import React from "react";
import styles from "./FormRegister.module.css";

export const FormRegister = () => {
  const [fullname, setFullname] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [gender, setGender] = React.useState("");
  const [dobirth, setDobirth] = React.useState("");
  const [country, setCountry] = React.useState("");
  const [hobbies, setHobbies] = React.useState<string[]>([]);
  const [thumbnail, setThumbnail] = React.useState<File | null>(null);
  const [bio, setBio] = React.useState("");
  const [errors, setErrors] = React.useState({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    gender: "",
    dob: "",
    country: "",
    hobbies: "",
    thumbnail: "",
    bio: "",
  });

  // Validate functions
  const vName = (value: string) => /^.{3,}$/.test(value);
  const vEmail = (value: string) =>
    !!value.trim() && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  const vPassword = (value: string) =>
    value.trim() !== "" &&
    /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(value.trim());
  const vRepeatPassword = (value: string, password: string) =>
    value === password;
  const vPhone = (value: string) =>
    value.trim() !== "" && /^\d{10,}$/.test(value.trim());
  const vDOB = (value: string) => {
    if (!value) return false;
    const dob = new Date(value);
    const today = new Date();
    if (isNaN(dob.getTime())) return false;
    const ageDiff = today.getFullYear() - dob.getFullYear();
    const hasHadBirthday =
      today.getMonth() > dob.getMonth() ||
      (today.getMonth() === dob.getMonth() && today.getDate() >= dob.getDate());
    const age = hasHadBirthday ? ageDiff : ageDiff - 1;
    return age >= 18;
  };
  const vCountry = (value: string) => value.trim() !== "";
  const vHobbies = (arr: string[]) => arr.length > 0;
  const vThumbnail = (file: File | null) => {
    if (!file) return true;
    const allowedTypes = ["image/jpg", "image/jpeg", "image/png"];
    return allowedTypes.includes(file.type);
  };
  const vBio = (value: string) => value.trim().length <= 300;
  const isFormValid =
    vName(fullname) &&
    vEmail(email) &&
    vPassword(password) &&
    vRepeatPassword(confirmPassword, password) &&
    vPhone(phone) &&
    vDOB(dobirth) &&
    vCountry(country) &&
    vHobbies(hobbies) &&
    vThumbnail(thumbnail) &&
    vBio(bio);

  // Handle change
  const handleOnChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;

    switch (name) {
      case "fullname":
        setFullname(value);
        setErrors((prev) => ({
          ...prev,
          fullname: vName(value) ? "" : "Name must have at least 3 characters",
        }));
        break;
      case "email":
        setEmail(value);
        setErrors((prev) => ({
          ...prev,
          email: vEmail(value) ? "" : "Please enter a valid email address",
        }));
        break;
      case "password":
        setPassword(value);
        setErrors((prev) => ({
          ...prev,
          password: vPassword(value)
            ? ""
            : "Password must be at least 8 characters long and include both letters and numbers",
        }));
        break;
      case "confirmPassword":
        setConfirmPassword(value);
        setErrors((prev) => ({
          ...prev,
          confirmPassword: vRepeatPassword(value, password)
            ? ""
            : "Passwords do not match",
        }));
        break;
      case "phone":
        setPhone(value);
        setErrors((prev) => ({
          ...prev,
          phone: vPhone(value)
            ? ""
            : "Please enter a valid phone number with at least 10 digits",
        }));
        break;
      case "gender":
        setGender(value);
        setErrors((prev) => ({
          ...prev,
          gender: value ? "" : "Gender is required",
        }));
        break;
      case "dob":
        setDobirth(value);
        setErrors((prev) => ({
          ...prev,
          dob: vDOB(value) ? "" : "You must be at least 18 years old",
        }));
        break;
      case "country":
        setCountry(value);
        setErrors((prev) => ({
          ...prev,
          country: vCountry(value) ? "" : "Please select a country",
        }));
        break;
      case "hobbies": {
        const { checked, value: hobbyValue } = e.target as HTMLInputElement;
        setHobbies((prev) => {
          let newHobbies;
          if (checked) {
            newHobbies = [...prev, hobbyValue];
          } else {
            newHobbies = prev.filter((h) => h !== hobbyValue);
          }
          setErrors((prevErr) => ({
            ...prevErr,
            hobbies:
              newHobbies.length === 0 ? "Please select at least one hobby" : "",
          }));
          return newHobbies;
        });
        break;
      }
      case "thumbnail": {
        const input = e.target as HTMLInputElement;
        const file =
          input.files && input.files.length > 0 ? input.files[0] : null;
        setThumbnail(file);
        setErrors((prev) => ({
          ...prev,
          thumbnail: vThumbnail(file)
            ? ""
            : "Please upload a valid image file (jpg, jpeg, png)",
        }));
        break;
      }
      case "bio":
        setBio(value);
        setErrors((prev) => ({
          ...prev,
          bio: vBio(value) ? "" : "Bio must be less than 300 characters",
        }));
        break;
    }
  };

  const isHobbyChecked = (hobby: string) => hobbies.includes(hobby);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Form submitted!");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h1 className={styles.title}>Register Form</h1>
      <div className={styles.formGroup}>
        <label htmlFor="fullname">Fullname</label>
        <input
          type="text"
          className={styles.input}
          name="fullname"
          value={fullname}
          onChange={handleOnChange}
        />
        <span className={styles.error}>{errors.fullname}</span>
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          className={styles.input}
          name="email"
          value={email}
          onChange={handleOnChange}
        />
        <span className={styles.error}>{errors.email}</span>
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className={styles.input}
          name="password"
          value={password}
          onChange={handleOnChange}
        />
        <span className={styles.error}>{errors.password}</span>
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          className={styles.input}
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleOnChange}
        />
        <span className={styles.error}>{errors.confirmPassword}</span>
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="phone">Phone</label>
        <input
          type="tel"
          className={styles.input}
          name="phone"
          value={phone}
          onChange={handleOnChange}
        />
        <span className={styles.error}>{errors.phone}</span>
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="gender">Gender</label>
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={gender === "male"}
            onChange={handleOnChange}
          />{" "}
          Male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={gender === "female"}
            onChange={handleOnChange}
          />{" "}
          Female
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="other"
            checked={gender === "other"}
            onChange={handleOnChange}
          />{" "}
          Other
        </label>
        <span className={styles.error}>{errors.gender}</span>
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="dob">Date of Birth</label>
        <input
          type="date"
          className={styles.input}
          name="dob"
          value={dobirth}
          onChange={handleOnChange}
        />
        <span className={styles.error}>{errors.dob}</span>
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="country">Country</label>
        <select
          className={styles.input}
          name="country"
          value={country}
          onChange={handleOnChange}
        >
          <option value="" disabled>
            Select Country
          </option>
          <option value="vn">Vietnam</option>
          <option value="us">United States</option>
          <option value="uk">United Kingdom</option>
        </select>
        <span className={styles.error}>{errors.country}</span>
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="hobbies">Hobbies</label>
        <label>
          <input
            type="checkbox"
            name="hobbies"
            value="reading"
            checked={isHobbyChecked("reading")}
            onChange={handleOnChange}
          />{" "}
          Reading
        </label>
        <label>
          <input
            type="checkbox"
            name="hobbies"
            value="traveling"
            checked={isHobbyChecked("traveling")}
            onChange={handleOnChange}
          />{" "}
          Traveling
        </label>
        <label>
          <input
            type="checkbox"
            name="hobbies"
            value="gaming"
            checked={isHobbyChecked("gaming")}
            onChange={handleOnChange}
          />{" "}
          Gaming
        </label>
        <span className={styles.error}>{errors.hobbies}</span>
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="thumbnail">Picture Profile</label>
        <input
          type="file"
          className={styles.input}
          name="thumbnail"
          accept="image/*"
          onChange={handleOnChange}
        />
        <span className={styles.error}>{errors.thumbnail}</span>
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="bio">Bio</label>
        <textarea
          className={styles.input}
          rows={4}
          name="bio"
          value={bio}
          onChange={handleOnChange}
        />
        <span className={styles.error}>{errors.bio}</span>
      </div>
      <button
        type="submit"
        className={styles.submitButton}
        disabled={!isFormValid}
      >
        Submit
      </button>
    </form>
  );
};
