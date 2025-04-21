import { useForm } from 'react-hook-form'

function TodoForm({ onSubmit, defaultValues = {} }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ defaultValues })

  const submitHandler = (data) => {
    onSubmit(data)
    reset()
  }

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="space-y-4 max-w-md mx-auto"
    >
      <div>
        <label htmlFor="title" className="block text-sm font-medium">
          Task Title
        </label>
        <input
          id="title"
          {...register('title', { required: 'Task title is required' })}
          className="mt-1 block w-full p-2 border rounded-md"
          placeholder="Enter task title"
        />
        {errors.title && (
          <p className="text-red-500 text-sm">{errors.title.message}</p>
        )}
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700"
      >
        Add Task
      </button>
    </form>
  )
}

export default TodoForm