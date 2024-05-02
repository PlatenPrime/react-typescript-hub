import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'




const schema = z.object({
    email: z.string().email(),
    password: z.string(),
})





type FormFields = z.infer<typeof schema>


export default function ReactHookForm() {



    const {
        register,
        handleSubmit,
        setError,
        formState: { errors, isSubmitting },
    } = useForm<FormFields>({
        defaultValues: {
            email: "test@email.com",
            password: "password",
        },
        resolver: zodResolver(schema),
    });


    const onSubmit: SubmitHandler<FormFields> = async (data: FormFields) => {

        try {
            await new Promise((resolve) => setTimeout(resolve, 1000))
            throw new Error()
            console.log(data)
        } catch (error) {
            setError("root", { type: "manual", message: "Something went wrong" })
        }

    }



    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col items-center gap-3"
        >
            <input
                className="border outline-none "
                {...register("email",)} type="text" placeholder="Email" />
            {errors.email && <span className="text-red-500" >{errors.email.message}</span>}
            <input
                className="border outline-none "
                {...register("password", 
                )} type="text" placeholder="Password" />
            {errors.password && <span className="text-red-500" >{errors.password.message}</span>}
            <button
                disabled={isSubmitting}
                className="bg-blue-500 text-white px-3 py-2 rounded-md"
                type="submit">
                {isSubmitting ? "Submitting..." : "Submit"}
            </button>
            {errors.root && <span className="text-red-500" >{errors.root.message}</span>}
        </form>
    )
}
