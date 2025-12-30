// src/lib/generate-og.tsx
import React from 'react';
import { ImageResponse } from '@vercel/og';
import fs from 'fs';
import path from 'path';

export async function generateOgImage(title: string, slug: string) {
  try {
    // Créer le dossier public/og s'il n'existe pas
    const ogDir = path.join(process.cwd(), 'public', 'og');
    if (!fs.existsSync(ogDir)) {
      fs.mkdirSync(ogDir, { recursive: true });
    }

    // Utiliser ImageResponse de @vercel/og qui gère automatiquement les polices
    const imageResponse = new ImageResponse(
      (
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#1e293b',
            color: '#ffffff',
            padding: '60px',
            fontFamily: 'system-ui, sans-serif',
          }}
        >
          <div
            style={{
              fontSize: '48px',
              fontWeight: 'bold',
              marginBottom: '40px',
              color: '#60a5fa',
            }}
          >
            Media Chrétien
          </div>
          <div
            style={{
              fontSize: '56px',
              fontWeight: 'bold',
              textAlign: 'center',
              lineHeight: '1.2',
              maxWidth: '900px',
            }}
          >
            {title}
          </div>
          <div
            style={{
              fontSize: '24px',
              marginTop: '40px',
              color: '#94a3b8',
            }}
          >
            Extraits du Message de Kacou Philippe
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );

    // Convertir en buffer
    const imageBuffer = await imageResponse.arrayBuffer();

    // Sauvegarder dans public/og
    const outputPath = path.join(ogDir, `${slug}.png`);
    fs.writeFileSync(outputPath, Buffer.from(imageBuffer));

    console.log(`✓ Image OG générée: ${slug}.png`);
    return outputPath;
  } catch (error) {
    console.error(`✗ Erreur lors de la génération de l'image OG pour ${slug}:`, error);
    throw error;
  }
}
