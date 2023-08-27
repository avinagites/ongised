import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "astro:content";

enum Msg {
  REQUIRED = "Can't be empty",
  EMAIL = "Use valid email address",
}

const schema = z.object({
  name: z.string().min(1, { message: Msg.REQUIRED }),
  email: z.string().min(1, { message: Msg.REQUIRED }).email({ message: Msg.EMAIL }),
  phone: z.string().optional(),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

export const ContactForm = () => {
  const [success, setSuccess] = useState<string>();

  const {
    register,
    handleSubmit,
    reset,

    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (values: FormValues) => {
    setSuccess(`Thank you for reaching out to us,\n ${values.name}!`);
  };

  const handleRetry = () => {
    reset();
    setSuccess(undefined);
  };

  const styles = {
    control: "relative z-0 w-full",
    input:
      "form-input peer block w-full appearance-none border-0 border-b border-white/50 bg-transparent px-4 py-3.5 text-white focus:border-white focus:outline-none focus:ring-0",
    label:
      "form-input absolute left-0 top-3 -z-10 origin-[0] translate-x-1 -translate-y-6 scale-75 pl-4 text-white/50 duration-400 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:translate-x-1 peer-focus:scale-75",
    error: "form-error absolute bottom-3 right-0 inline-flex flex-row items-center gap-[0.56rem] text-white",
  };

  const showErrorMsg = (message: string) => (
    <div className={styles.error}>
      <span className="mt-0.5">{message}</span>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
        <g fill="none" fillRule="evenodd">
          <circle cx="10" cy="10" r="10" fill="#FFF" />
          <path fill="#E7816B" d="M11 14v2H9v-2h2zm0-9v7H9V5h2z" />
        </g>
      </svg>
    </div>
  );

  return !!success ? (
    <div className="flex min-h-[24.65rem] flex-col items-center justify-center gap-4 md:items-start md:text-left">
      <h3 className="text-white">{success}</h3>
      <p className="text-white md:max-w-[35rem] xl:max-w-[27rem]">
        Your message has been successfully sent through our contact form. We appreciate your interest and will respond
        to your inquiry as soon as possible. Have a great day!
      </p>
      <button onClick={handleRetry} className="btn-on-dark focus-on-dark mt-5 md:self-end">
        Send another message
      </button>
    </div>
  ) : (
    <form onSubmit={handleSubmit(onSubmit)} className="flex w-full flex-col gap-4">
      <div className={styles.control}>
        <input id="name" type="text" placeholder=" " className={styles.input} {...register("name")} />
        <label htmlFor="name" className={styles.label}>
          Name
        </label>
        {errors.name && showErrorMsg(String(errors.name.message))}
      </div>
      <div className={styles.control}>
        <input id="email" type="text" placeholder=" " className={styles.input} {...register("email")} />
        <label htmlFor="email" className={styles.label}>
          E-mail
        </label>
        {errors.email && showErrorMsg(String(errors.email.message))}
      </div>
      <div className={styles.control}>
        <input id="phone" type="text" placeholder=" " className={styles.input} {...register("phone")} />
        <label htmlFor="phone" className={styles.label}>
          Phone
        </label>
        {errors.phone && showErrorMsg(String(errors.phone.message))}
      </div>
      <div className={styles.control}>
        <textarea id="message" rows={3} placeholder=" " className={styles.input} {...register("message")} />
        <label htmlFor="message" className={styles.label}>
          Your Message
        </label>
        {errors.message && showErrorMsg(String(errors.message.message))}
      </div>
      <button type="submit" className="btn-on-dark focus-on-dark mt-10 min-w-[9.5rem] self-center md:mt-2 md:self-end">
        Submit
      </button>
    </form>
  );
};
