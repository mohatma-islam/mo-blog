import Post from "@/models/Post";
import { NextResponse } from "next/server";
import connect from "@/utils/db";

export const GET = async (request, { params }) => {
  const { id } = params;

  try {
    await connect();

    const post = await Post.findById(id);

    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (error) {
    return new NextResponse(error.message, { status: 500 });
  }
};

export const DELETE = async (request, { params }) => {
  const { id } = params;

  try {
    await connect();

    await Post.findByIdAndDelete(id);

    return new NextResponse("Post Deleted!", { status: 200 });
  } catch (error) {
    return new NextResponse(error.message, { status: 500 });
  }
};

export const PUT = async (request, { params }) => {
  const { id } = params;

  const body = await request.json();

  try {
    await connect();
    const updatedPost = await Post.findByIdAndUpdate(id, body, { new: true });
    if (!updatedPost) {
      return new NextResponse("Post not found!", { status: 404 });
    }
    return new NextResponse("Post updated!", { status: 200 });
  } catch (error) {
    console.log(error);
    return new NextResponse("Error updating post!", { status: 500 });
  }
};
