"use client";
import React, { useEffect, useState } from "react";
import style from "./page.module.css";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
const Dashboard = () => {
  const session = useSession();
  const router = useRouter();
  const [postData, setPostData] = useState(null);
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, mutate, error, isLoading } = useSWR(
    `/api/posts?username=${session?.data?.user.name}`,
    fetcher
  );

  console.log(session?.data?.user.name);

  console.log(data);

  if (session.status === "loading") {
    return <p>Loading....</p>;
  }

  if (session.status === "unauthenticated") {
    router?.push("/dashboard/login");
  }

  console.log(session);

  const handleSubmit = async (e) => {
    console.log(e);
    console.log('Post ID: ' + postData._id);
    e.preventDefault();
    const title = e.target[0].value;
    const desc = e.target[1].value;
    const img = e.target[2].value;
    const content = e.target[3].value;

    console.log(title);
    console.log(desc);
    console.log(img);
    console.log(content);

    const url = postData ? `/api/posts/${postData._id}` : "/api/posts";
    const method = postData ? "PUT" : "POST";

    try {
      await fetch(url, {
        method: method,
        body: JSON.stringify({
          title,
          desc,
          img,
          content,
          username: session.data.user.name,
        }),
      });
      mutate();
      setPostData(null); // reset postData after submit
      e.target.reset();
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`/api/posts/${id}`, {
        method: "DELETE",
      });
      mutate();
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleUpdate = async (id) => {
    console.log(id);

    try {
      const response = await fetch(`/api/posts/${id}`, {
        method: "GET",
      });
      const data = await response.json();
      setPostData(data);
      console.log(data.title);
    } catch (error) {
      console.log(error.message);
    }
  };

  if (session.status === "authenticated") {
    return (
      <div className={style.container}>
        <div className={style.posts}>
          {isLoading
            ? "Loading..."
            : data?.map((post) => (
                <div
                  className={style.post}
                  key={post._id}
                >
                  <div className={style.imgContainer}>
                    <Image src={post.img} width={200} height={200} alt="" />
                  </div>
                  <h2 className={style.postTitle}>{post.title}</h2>
                  <span
                    className={style.update}
                    onClick={() => handleUpdate(post._id)}
                  >
                    Update
                  </span>
                  <span
                    className={style.delete}
                    onClick={() => handleDelete(post._id)}
                  >
                    Delete
                  </span>
                </div>
              ))}
        </div>
        <form className={style.new} onSubmit={handleSubmit}>
          <h1>{postData ? "Update Post" : "Add New Post"}</h1>
          <input type="text" placeholder="Title" className={style.input} defaultValue={postData?.title || ''}/>
          <input
            type="text"
            placeholder="Description"
            className={style.input}
            defaultValue={postData?.desc || ''}
          />
          <input type="text" placeholder="Image" className={style.input} defaultValue={postData?.img || ''}/>
          <textarea
            placeholder="Content"
            className={style.textArea}
            cols="30"
            rows="10"
            defaultValue={postData?.content || ''}
          ></textarea>
          <button className={style.button}>
            {postData ? "Update" : "Send"}
          </button>
        </form>
      </div>
    );
  }
};

export default Dashboard;
