import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    
    // Validate required fields
    const { name, email, phone, subject, message } = data
    
    if (!name || !email || !phone || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // Phone validation - check for minimum 10 digits
    const phoneDigitsOnly = phone.replace(/\D/g, '')
    if (phoneDigitsOnly.length < 10) {
      return NextResponse.json(
        { error: 'Invalid phone number - must have at least 10 digits' },
        { status: 400 }
      )
    }

    // Message length validation
    if (message.trim().length < 10) {
      return NextResponse.json(
        { error: 'Message must be at least 10 characters long' },
        { status: 400 }
      )
    }

    // Insert into Supabase with validated data
    const { error: insertError } = await supabase
      .from('inquiries')
      .insert([
        {
          name: name.trim(),
          email: email.trim().toLowerCase(),
          phone: phone.trim(),
          subject: subject.trim(),
          message: message.trim(),
          status: 'new',
        }
      ])

    if (insertError) {
      console.error('Supabase insert error:', insertError)
      return NextResponse.json(
        { error: 'Failed to submit inquiry. Please try again.' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { success: true, message: 'Inquiry received successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
