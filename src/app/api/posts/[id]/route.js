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
