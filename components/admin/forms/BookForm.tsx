"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { DefaultValues, FieldValues, Path, SubmitHandler, useForm, UseFormReturn } from "react-hook-form";
import React from 'react';
import { z, ZodType } from "zod";

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Link from "next/link";
import { FIELD_NAMES, FIELD_TYPES } from "@/constants";

import { toast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";

import { bookSchema } from "@/lib/validations";
import { Textarea } from "@/components/ui/textarea";

interface Props extends Partial<Book> {
 type?: 'create' | 'update'  
}

 const BookForm =  ({
    type,
    ...book
    
 }:Props) => {
  const router = useRouter();
  
  const form = useForm<z.infer<typeof bookSchema>>({
    resolver: zodResolver(bookSchema),
    defaultValues: {
      title: '',
      description: '',
      author: '',
      genre: '',
      rating:1,
      totalCopies:1,
      cover: '',
      coverColor: '',
      video: '',
      summary: '',
        
    }
  });
 
  const onSubmit = async (values:z.infer<typeof bookSchema>) => {};
  return (
    
    <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
      
        <FormField
        
        control={form.control}
        name={"title"}
        render={({ field }) => (
          <FormItem className="flex flex-col gap-1">
            <FormLabel className="text-base font-normal text-dark-500">
              Book Title
              </FormLabel>
            <FormControl>
            
              <Input 
              required 
              placeholder="Book title"

               {...field}
               className="book-form_input"
              />

            </FormControl>
  
            <FormMessage />
          </FormItem>
        )}
      />

<FormField
        
        control={form.control}
        name={"author"}
        render={({ field }) => (
          <FormItem className="flex flex-col gap-1">
            <FormLabel className="text-base font-normal text-dark-500">
              Author
              </FormLabel>
            <FormControl>
            
              <Input 
              required 
              placeholder="Book author"

               {...field}
               className="book-form_input"
              />

            </FormControl>
  
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        
        control={form.control}
        name={"genre"}
        render={({ field }) => (
          <FormItem className="flex flex-col gap-1">
            <FormLabel className="text-base font-normal text-dark-500">
              Genre
              </FormLabel>
            <FormControl>
            
              <Input 
              required 
              placeholder="Book genre"

               {...field}
               className="book-form_input"
              />

            </FormControl>
  
            <FormMessage />
          </FormItem>
        )}
      />

<FormField
        
        control={form.control}
        name={"rating"}
        render={({ field }) => (
          <FormItem className="flex flex-col gap-1">
            <FormLabel className="text-base font-normal text-dark-500">
              Rating
              </FormLabel>
            <FormControl>
            
              <Input 
              type="number"
              min={1}
              max={5} 
              placeholder="Book rating"

               {...field}
               className="book-form_input"
              />

            </FormControl>
  
            <FormMessage />
          </FormItem>
        )}
      />

<FormField
        
        control={form.control}
        name={"totalCopies"}
        render={({ field }) => (
          <FormItem className="flex flex-col gap-1">
            <FormLabel className="text-base font-normal text-dark-500">
              Total Copies
              </FormLabel>
            <FormControl>
            
              <Input 
              type="number"
              min={1}
              max={10000}
              placeholder="Total copies"

               {...field}
               className="book-form_input"
              />

            </FormControl>
  
            <FormMessage />
          </FormItem>
        )}
      />

<FormField
        
        control={form.control}
        name={"cover"}
        render={({ field }) => (
          <FormItem className="flex flex-col gap-1">
            <FormLabel className="text-base font-normal text-dark-500">
              Book Image
              </FormLabel>
            <FormControl>
            {/* File Upload*/}

            </FormControl>
  
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        
        control={form.control}
        name={"coverColor"}
        render={({ field }) => (
          <FormItem className="flex flex-col gap-1">
            <FormLabel className="text-base font-normal text-dark-500">
              Primary Color
              </FormLabel>
            <FormControl>
            {/* Color Picker*/}

            </FormControl>
  
            <FormMessage />
          </FormItem>
        )}
      />

<FormField
        
        control={form.control}
        name={"description"}
        render={({ field }) => (
          <FormItem className="flex flex-col gap-1">
            <FormLabel className="text-base font-normal text-dark-500">
              Book Description
              </FormLabel>
            <FormControl>
            <Textarea 
             placeholder="Book description" {...field} rows={10} className="book-form_input"
            />

            </FormControl>
  
            <FormMessage />
          </FormItem>
        )}
      />

<FormField
        
        control={form.control}
        name={"video"}
        render={({ field }) => (
          <FormItem className="flex flex-col gap-1">
            <FormLabel className="text-base font-normal text-dark-500">
              Book Trailer
              </FormLabel>
            <FormControl>
            {/* File Upload*/}

            </FormControl>
  
            <FormMessage />
          </FormItem>
        )}
      />

<FormField
        
        control={form.control}
        name={"summary"}
        render={({ field }) => (
          <FormItem className="flex flex-col gap-1">
            <FormLabel className="text-base font-normal text-dark-500">
              Book Summary
              </FormLabel>
            <FormControl>
            <Textarea 
             placeholder="Book Summary" {...field} rows={5} className="book-form_input"
            />

            </FormControl>
  
            <FormMessage />
          </FormItem>
        )}
      />

      <Button type="submit" className="book-form_btn text-white">
        Add Book to Library
      </Button>
    </form>
  </Form>
 
  );
};
export default BookForm;