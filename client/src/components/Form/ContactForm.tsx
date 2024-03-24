import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { contactFormSchema } from "./contactFormSchema";

import {
  Form,
  FormControl,
  //   FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { motion } from "framer-motion";

export default function ContactForm() {
  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  // Errors object
  //   console.log("formErrors: ", JSON.stringify(form.formState.errors, null, 4));
  //   console.log("-----------------------------------------");

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function onSubmit(_values: z.infer<typeof contactFormSchema>) {
    // console.log(_values);
    toast({
      title: "Message Received",
      description: "We will be in touch with you soon!",
    });
  }

  return (
    <Form {...form}>
      <motion.form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 mt-10 flex flex-col"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <div className="flex flex-col sm:flex-row gap-10">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="sm:w-[50vw]">
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Brad Pitt"
                    {...field}
                    className="bg-neutral-900 border-none"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="sm:w-[50vw]">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="brad.pitt@hollywood.com"
                    {...field}
                    className="bg-neutral-900 border-none"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Subject</FormLabel>
              <FormControl>
                <Input
                  placeholder="Design Consultation"
                  {...field}
                  className="bg-neutral-900 border-none"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message </FormLabel>
              <FormControl>
                <Input
                  placeholder="Hi folks! I was interested in the photogh..."
                  {...field}
                  className="h-32 bg-neutral-900 border-none"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <button
          title="Submit"
          type="submit"
          className="flex bg-neutral-700 hover:bg-neutral-500 bg-opacity-60 px-6 py-2 rounded-full w-fit"
        >
          Submit
        </button>
      </motion.form>
    </Form>
  );
}
