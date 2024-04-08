import React from 'react';
import Link from 'next/link';
import findkeyword from './findkeyword';
export default function Sitelink({ sitelink }) {
  return (
 
      <div className="h-8 w-24">
                        <Link
                          href={sitelink}
                          className="w-full h-full font-medium rounded-lg bg-black bg-cover flex items-center justify-center hover:border-2 hover:border-gray-200 "
                          style={{
                              backgroundImage: `url(${findkeyword({
                                  string:sitelink}
                            )})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                          }}
                        >
                          {/* Optional: Display a placeholder or text if no image is found */}
              {!findkeyword({string: sitelink }) && (
                            <span className="text-white">
                              Image not available
                            </span>
                          )}
                        </Link>
                      </div>

  );
}
