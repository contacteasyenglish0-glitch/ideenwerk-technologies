import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, service, message } = body;

    // Vérification des champs obligatoires
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { 
          success: false, 
          message: "Tous les champs obligatoires doivent être remplis." 
        }, 
        { status: 400 }
      );
    }

    // Vérification de la clé API
    const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      console.error('WEB3FORMS_ACCESS_KEY non définie dans .env.local');
      return NextResponse.json(
        { 
          success: false, 
          message: "Configuration serveur incorrecte. La clé API est manquante." 
        }, 
        { status: 500 }
      );
    }

    // Envoi vers Web3Forms
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        access_key: accessKey,
        subject: `Nouveau message de ${firstName} ${lastName} - ${service || 'Non spécifié'}`,
        from_name: `${firstName} ${lastName}`,
        replyto: email,
        email: email,
        phone: phone || 'Non fourni',
        service: service || 'Non spécifié',
        message: message,
      })
    });

    const result = await response.json();
    
    console.log('Réponse Web3Forms:', result);

    if (result.success) {
      return NextResponse.json({ 
        success: true, 
        message: "Message envoyé avec succès ! Nous vous répondrons sous 24h." 
      });
    } else {
      console.error('Erreur Web3Forms:', result);
      return NextResponse.json({ 
        success: false, 
        message: result.message || "Erreur lors de l'envoi. Veuillez réessayer." 
      }, { status: 500 });
    }
  } catch (error) {
    console.error('Erreur API Contact:', error);
    return NextResponse.json({ 
      success: false, 
      message: "Erreur serveur. Veuillez réessayer plus tard ou nous contacter par WhatsApp." 
    }, { status: 500 });
  }
}