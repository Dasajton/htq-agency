import { useForm } from 'react-hook-form';

const HomeContact = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto bg-blue-600">
      <div className="mb-4">
        <label className="block text-blue-50 text-sm font-bold mb-2" htmlFor="name">
          Name
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-blue-600 leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          type="text"
          placeholder="Ihr Name"
          name="name"
          ref={register({ required: 'Name is required' })}
        />
        {errors.name && <p className="text-red-500 text-xs italic">{errors.name.message}</p>}
      </div>
      <div className="mb-4">
        <label className="block text-blue-50 text-sm font-bold mb-2" htmlFor="email">
          E-Mail
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-blue-600 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          placeholder="Ihre E-Mail"
          name="email"
          ref={register({
            required: 'E-Mail is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: 'Invalid email address',
            },
          })}
        />
        {errors.email && <p className="text-red-500 text-xs italic">{errors.email.message}</p>}
      </div>
      <div className="mb-6">
        <label className="block text-blue-50 text-sm font-bold mb-2" htmlFor="message">
          Nachricht
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-blue-600 leading-tight focus:outline-none focus:shadow-outline"
          id="message"
          placeholder="Ihre Nachricht"
          name="message"
          ref={register({ required: 'Nachricht is required' })}
        />
        {errors.message && <p className="text-red-500 text-xs italic">{errors.message.message}</p>}
      </div>
      <div className="mb-6">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-blue-50 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Nachricht senden
        </button>
      </div>
    </form>
  );
};

export default HomeContact;
